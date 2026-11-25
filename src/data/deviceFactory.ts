import { DeviceInfo, FpsOption, GraphicsSettingPerformance, GraphicsTier } from '@/types/device';

export interface DeviceSeed {
  id?: string;
  brand: string;
  model: string;
  slug?: string;
  brandSlug?: string;
  releaseYear: number;
  chipset: string;
  gpu: string;
  ramOptions: string[];
  displayRefreshRate: number;
  screenSize: string;
  batteryCapacity: number;
  antutuScore?: number;
  gyroscope: DeviceInfo['gyroscope'];
  coolingSystem?: string;
  pubgOfficialPartner?: boolean;
  maxSupportedFps: DeviceInfo['maxSupportedFps'];
  overallGamingRating: number;
  popularityRank?: number;
  benchmarkDate?: string;
  benchmarkSource?: string;
  isUnsupportedHardware?: boolean;
  thermalRisk?: GraphicsSettingPerformance['thermalRisk'];
  notes?: string;
  pros?: string[];
  cons?: string[];
  verdict?: string;
}

function slugifyPart(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getFpsOptionsForCap(fps: number): FpsOption[] {
  if (fps >= 120) return ['60 FPS (Ultra)', '90 FPS (Extreme)', '120 FPS (Extreme+)'];
  if (fps >= 90) return ['40 FPS (High)', '60 FPS (Ultra)', '90 FPS (Extreme)'];
  if (fps >= 60) return ['30 FPS (Medium)', '40 FPS (High)', '60 FPS (Ultra)'];
  if (fps >= 40) return ['25 FPS (Low)', '30 FPS (Medium)', '40 FPS (High)'];
  if (fps >= 30) return ['20 FPS (Low)', '25 FPS (Low)', '30 FPS (Medium)'];
  if (fps >= 25) return ['20 FPS (Low)', '25 FPS (Low)'];
  return ['0 FPS (Unsupported)'];
}

function buildTierSetting(
  tier: GraphicsTier,
  maxFps: DeviceInfo['maxSupportedFps'],
  baseThermal: GraphicsSettingPerformance['thermalRisk'],
  seed: DeviceSeed
): GraphicsSettingPerformance {
  if (seed.isUnsupportedHardware || maxFps === 0) {
    return {
      supported: false,
      fpsOptions: ['0 FPS (Unsupported)'],
      estimatedFps: 0,
      fpsMin: 0,
      fpsMax: 0,
      stabilityScore: 0,
      thermalRisk: 'Severe',
      batteryDrainPerHour: 0,
      confidenceLevel: 'Unsupported',
      notes: seed.notes || 'Hardware falls below PUBG Mobile 64-bit / RAM minimum requirements.'
    };
  }

  let cap: number = maxFps;
  let supported = true;
  let stability = maxFps >= 90 ? 94 : maxFps >= 60 ? 92 : 85;
  let thermalRisk: GraphicsSettingPerformance['thermalRisk'] = baseThermal;
  let batteryDrain = maxFps >= 90 ? 18 : maxFps >= 60 ? 16 : 13;

  if (tier === 'Balanced') {
    cap = maxFps >= 90 ? 90 : maxFps >= 60 ? 60 : Math.min(maxFps, 40);
    stability -= 2;
    batteryDrain += 1;
  } else if (tier === 'HD') {
    cap = maxFps >= 90 ? 60 : maxFps >= 40 ? 40 : 30;
    if (maxFps <= 25) supported = false;
    stability -= 3;
    batteryDrain += 3;
  } else if (tier === 'HDR') {
    cap = maxFps >= 90 ? 60 : maxFps >= 60 ? 40 : 30;
    if (maxFps < 40) supported = false;
    thermalRisk = baseThermal === 'Low' ? 'Moderate' : 'High';
    stability -= 5;
    batteryDrain += 5;
  } else if (tier === 'Ultra HD') {
    if (maxFps < 60) {
      supported = false;
    } else {
      cap = 40;
      thermalRisk = 'High';
      stability -= 7;
      batteryDrain += 7;
    }
  }

  if (!supported) {
    return {
      supported: false,
      fpsOptions: [],
      estimatedFps: 0,
      fpsMin: 0,
      fpsMax: 0,
      stabilityScore: 0,
      thermalRisk: 'Severe',
      batteryDrainPerHour: 0,
      confidenceLevel: 'Unsupported',
      notes: `${tier} graphics preset is locked by the PUBG Mobile client on ${seed.model}.`
    };
  }

  const fpsMin = Math.max(cap - (cap >= 90 ? 6 : 4), 18);
  return {
    supported: true,
    fpsOptions: getFpsOptionsForCap(cap),
    estimatedFps: cap,
    fpsMin,
    fpsMax: cap,
    stabilityScore: Math.max(stability, 72),
    thermalRisk,
    batteryDrainPerHour: batteryDrain,
    confidenceLevel: 'Verified',
    notes:
      tier === 'Smooth'
        ? seed.notes || `Runs ${cap} FPS target on Smooth graphics (${seed.chipset}).`
        : `${tier} preset capped at ${cap} FPS on ${seed.model}.`
  };
}

export function createDevice(seed: DeviceSeed): DeviceInfo {
  const brandSlug = seed.brandSlug || slugifyPart(seed.brand);
  const fullSlug =
    seed.slug ||
    (seed.model.toLowerCase().startsWith(seed.brand.toLowerCase())
      ? slugifyPart(seed.model)
      : slugifyPart(`${seed.brand}-${seed.model}`));

  const baseThermal: GraphicsSettingPerformance['thermalRisk'] =
    seed.thermalRisk ||
    (seed.maxSupportedFps >= 120
      ? 'Moderate'
      : seed.maxSupportedFps >= 60
        ? 'Low'
        : seed.maxSupportedFps >= 30
          ? 'Moderate'
          : 'High');

  const isUnsupported = Boolean(seed.isUnsupportedHardware || seed.maxSupportedFps === 0);
  const fpsLabel = isUnsupported ? 'Unsupported' : `${seed.maxSupportedFps} FPS`;

  const defaultPros = isUnsupported
    ? ['Basic everyday calling & messaging']
    : [
        `Supports up to ${seed.maxSupportedFps} FPS in Smooth mode`,
        `${seed.displayRefreshRate}Hz display refresh support`,
        `${seed.batteryCapacity.toLocaleString()} mAh battery capacity`
      ];

  const defaultCons = isUnsupported
    ? ['Insufficient 64-bit / RAM headroom for standard PUBG Mobile']
    : seed.maxSupportedFps >= 90
      ? ['Can warm up during 30+ min high-FPS classic sessions']
      : ['Higher graphics tiers (HDR / Ultra HD) are frame-capped'];

  return {
    id: seed.id || fullSlug,
    brand: seed.brand,
    model: seed.model,
    slug: fullSlug,
    brandSlug,
    releaseYear: seed.releaseYear,
    chipset: seed.chipset,
    gpu: seed.gpu,
    ramOptions: seed.ramOptions,
    displayRefreshRate: seed.displayRefreshRate,
    screenSize: seed.screenSize,
    batteryCapacity: seed.batteryCapacity,
    antutuScore: seed.antutuScore,
    gyroscope: seed.gyroscope,
    coolingSystem: seed.coolingSystem || 'Standard Passive Dissipation',
    pubgOfficialPartner: Boolean(seed.pubgOfficialPartner),
    maxSupportedFps: seed.maxSupportedFps,
    overallGamingRating: seed.overallGamingRating,
    popularityRank: seed.popularityRank ?? 250,
    benchmarkDate: seed.benchmarkDate || '2026-02-01',
    benchmarkSource: seed.benchmarkSource || 'PUBGFrames Global Hardware Matrix',
    graphicsModes: {
      Smooth: buildTierSetting('Smooth', seed.maxSupportedFps, baseThermal, seed),
      Balanced: buildTierSetting('Balanced', seed.maxSupportedFps, baseThermal, seed),
      HD: buildTierSetting('HD', seed.maxSupportedFps, baseThermal, seed),
      HDR: buildTierSetting('HDR', seed.maxSupportedFps, baseThermal, seed),
      'Ultra HD': buildTierSetting('Ultra HD', seed.maxSupportedFps, baseThermal, seed)
    },
    pros: seed.pros || defaultPros,
    cons: seed.cons || defaultCons,
    verdict:
      seed.verdict ||
      (isUnsupported
        ? `${seed.brand} ${seed.model} is not supported for standard PUBG Mobile ranked play; consider PUBG Mobile Lite or a 60+ FPS device.`
        : `${seed.brand} ${seed.model} delivers ${fpsLabel} capability via ${seed.chipset} and ${seed.gyroscope}.`),
    isUnsupportedHardware: isUnsupported || undefined
  };
}
