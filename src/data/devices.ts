import { DeviceInfo, FpsCalculationResult, GraphicsTier } from '@/types/device';
import { searchDevicesWithFuzzy } from '@/utils/fuzzySearch';
import { SAMSUNG_DEVICES } from './samsungDevices';
import { APPLE_DEVICES } from './appleDevices';
import { OPPO_DEVICES } from './oppoDevices';
import { PIXEL_DEVICES } from './pixelDevices';
import { HUAWEI_DEVICES } from './huaweiDevices';
import { XIAOMI_DEVICES } from './xiaomiDevices';
import { POCO_DEVICES } from './pocoDevices';
import { REDMI_DEVICES } from './redmiDevices';
import { VIVO_DEVICES } from './vivoDevices';
import { MOTOROLA_DEVICES } from './motorolaDevices';
import { LG_DEVICES } from './lgDevices';
import { QMOBILE_DEVICES } from './qmobileDevices';
import { ONEPLUS_DEVICES } from './oneplusDevices';
import { REALME_DEVICES } from './realmeDevices';
import { INFINIX_DEVICES } from './infinixDevices';
import { TECNO_DEVICES } from './tecnoDevices';
import { ASUS_DEVICES } from './asusDevices';
import { ZTE_DEVICES } from './zteDevices';
import { REDMAGIC_DEVICES } from './redmagicDevices';
import { HONOR_DEVICES } from './honorDevices';
import { NOTHING_DEVICES } from './nothingDevices';
import { SONY_DEVICES } from './sonyDevices';
import { TABLET_DEVICES } from './tabletDevices';
import { GLOBAL_BRANDS_DEVICES } from './globalBrandsDevices';
import { BLACK_SHARK_DEVICES } from './blackSharkDevices';
import { LEGION_DEVICES } from './legionDevices';
import { RAZER_DEVICES } from './razerDevices';
import { IQOO_DEVICES } from './iqooDevices';

const RAW_DEVICES: DeviceInfo[] = [
  // --- POCO ---
  {
    id: 'poco-x6-pro',
    brand: 'POCO',
    model: 'POCO X6 Pro 5G',
    slug: 'poco-x6-pro-5g',
    brandSlug: 'poco',
    releaseYear: 2024,
    chipset: 'MediaTek Dimensity 8300 Ultra (4nm)',
    gpu: 'Mali-G615-MC6',
    ramOptions: ['8GB LPDDR5X', '12GB LPDDR5X'],
    displayRefreshRate: 120,
    screenSize: '6.67" AMOLED 1.5K 120Hz',
    batteryCapacity: 5000,
    antutuScore: 1390000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: '5000mm² LiquidCool Technology 2.0',
    pubgOfficialPartner: false,
    maxSupportedFps: 90,
    overallGamingRating: 9.2,
    popularityRank: 1,
    benchmarkDate: '2024-09-15',
    benchmarkSource: 'PUBGFrames Lab & Community 3.4 Benchmarks',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 86,
        fpsMax: 90,
        stabilityScore: 94,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Unlocks native 90 FPS on Smooth. Consistent 87-90 FPS in Erangel Bootcamp drops.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 83,
        fpsMax: 90,
        stabilityScore: 91,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Solid 90 FPS with enhanced textures and subtle shadow rendering.'
      },
      HD: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 80,
        fpsMax: 90,
        stabilityScore: 89,
        thermalRisk: 'High',
        batteryDrainPerHour: 22,
        confidenceLevel: 'Verified',
        notes: 'Can hit 90 FPS; after 25 mins of continuous gaming throttles to ~78 FPS without fan cooler.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 58,
        fpsMax: 60,
        stabilityScore: 97,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Flawless 60 FPS cap on HDR graphics.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 38,
        fpsMax: 40,
        stabilityScore: 95,
        thermalRisk: 'High',
        batteryDrainPerHour: 24,
        confidenceLevel: 'Verified',
        notes: 'Ultra HD graphics pack downloaded, capped at 40 FPS by PUBG Mobile.'
      }
    },
    pros: ['Insane price-to-performance ratio', 'Native 90 FPS support out of the box', 'Fast 120Hz 1.5K display'],
    cons: ['Gets warm during extended 90 FPS sessions', 'Plastic frame heat dissipation'],
    verdict: 'The reigning budget gaming king for PUBG Mobile. Sustains 90 FPS with stellar frame stability.'
  },
  {
    id: 'poco-f6-pro',
    brand: 'POCO',
    model: 'POCO F6 Pro',
    slug: 'poco-f6-pro',
    brandSlug: 'poco',
    releaseYear: 2024,
    chipset: 'Snapdragon 8 Gen 2 (4nm)',
    gpu: 'Adreno 740',
    ramOptions: ['12GB LPDDR5X', '16GB LPDDR5X'],
    displayRefreshRate: 120,
    screenSize: '6.67" WQHD+ AMOLED 120Hz',
    batteryCapacity: 5000,
    antutuScore: 1610000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: 'LiquidCool 4.0 with Iceloop system',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.6,
    popularityRank: 2,
    benchmarkDate: '2024-10-01',
    benchmarkSource: 'Verified In-Game Performance Logs',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 114,
        fpsMax: 120,
        stabilityScore: 96,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 22,
        confidenceLevel: 'Verified',
        notes: 'Supports Extreme+ 120 FPS mode in PUBG Mobile v3.2+. Exceptional fluidity.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 89,
        fpsMax: 90,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Near zero frame drops throughout 30-minute scrim matches.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 87,
        fpsMax: 90,
        stabilityScore: 95,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Stable 90 FPS with rich shadows and HDR texture pipeline.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 60,
        fpsMax: 60,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Locked 60 FPS without any fluctuation.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 40,
        fpsMax: 40,
        stabilityScore: 99,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 23,
        confidenceLevel: 'Verified',
        notes: 'Full 4K Ultra HD render with locked 40 FPS.'
      }
    },
    pros: ['120 FPS support in PUBG Mobile', 'Snapdragon 8 Gen 2 powerhouse', 'WQHD+ flagship grade screen'],
    cons: ['Higher battery drain at 120 FPS'],
    verdict: 'Competitive flagship slayer capable of 120 FPS in PUBG Mobile without breaking the bank.'
  },
  {
    id: 'poco-f5',
    brand: 'POCO',
    model: 'POCO F5 5G',
    slug: 'poco-f5-5g',
    brandSlug: 'poco',
    releaseYear: 2023,
    chipset: 'Qualcomm Snapdragon 7+ Gen 2 (4nm)',
    gpu: 'Adreno 725',
    ramOptions: ['8GB LPDDR5', '12GB LPDDR5'],
    displayRefreshRate: 120,
    screenSize: '6.67" Flow AMOLED 120Hz',
    batteryCapacity: 5000,
    antutuScore: 1120000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: '3725mm² VC Liquid Cooling',
    pubgOfficialPartner: false,
    maxSupportedFps: 90,
    overallGamingRating: 9.3,
    popularityRank: 5,
    benchmarkDate: '2024-08-22',
    benchmarkSource: 'Verified Hardware Benchmark',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 87,
        fpsMax: 90,
        stabilityScore: 96,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Extremely efficient Snapdragon 7+ Gen 2 sustains 90 FPS with minimal heat buildup.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 85,
        fpsMax: 90,
        stabilityScore: 94,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Excellent frame pacing.'
      },
      HD: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 82,
        fpsMax: 90,
        stabilityScore: 91,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Very clean 90 FPS.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 59,
        fpsMax: 60,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Rock steady 60 FPS.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 40,
        fpsMax: 40,
        stabilityScore: 99,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 22,
        confidenceLevel: 'Verified',
        notes: 'Supported at 40 FPS.'
      }
    },
    pros: ['Very cool running temperatures', 'Locked 90 FPS stability', 'Lightweight body (181g)'],
    cons: ['Plastic frame'],
    verdict: 'Legendary efficiency. Sustains 90 FPS cooler than almost any other mid-range smartphone.'
  },

  // --- APPLE (GLOBAL REPOSITORY - 40+ MODELS) ---
  ...APPLE_DEVICES,

  // --- SAMSUNG (GLOBAL REPOSITORY - 76+ VERIFIED & UNSUPPORTED MODELS) ---
  ...SAMSUNG_DEVICES,

  // --- INFINIX ---
  {
    id: 'infinix-gt-20-pro',
    brand: 'Infinix',
    model: 'Infinix GT 20 Pro',
    slug: 'infinix-gt-20-pro',
    brandSlug: 'infinix',
    releaseYear: 2024,
    chipset: 'MediaTek Dimensity 8200 Ultimate (4nm) + Pixelworks X5 Turbo',
    gpu: 'Mali-G610 MC6',
    ramOptions: ['8GB LPDDR5X', '12GB LPDDR5X'],
    displayRefreshRate: 144,
    screenSize: '6.78" FHD+ AMOLED 144Hz Bezel-less',
    batteryCapacity: 5000,
    antutuScore: 950000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: 'PCM graphite sheet & 73% larger vapor chamber',
    pubgOfficialPartner: true,
    maxSupportedFps: 120,
    overallGamingRating: 9.3,
    popularityRank: 6,
    benchmarkDate: '2024-09-28',
    benchmarkSource: 'Official PMSL / PMGC Tournament Test Logs',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 110,
        fpsMax: 120,
        stabilityScore: 93,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Official Tournament Gaming Phone for PMSL. Dedicated Pixelworks display chip interpolates up to 120 FPS.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 88,
        fpsMax: 90,
        stabilityScore: 96,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Near locked 90 FPS on Balanced settings.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 85,
        fpsMax: 90,
        stabilityScore: 92,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Smooth 90 FPS with high visual contrast.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 59,
        fpsMax: 60,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Consistent 60 FPS.'
      },
      'Ultra HD': {
        supported: false,
        fpsOptions: [],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'High',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: 'Ultra HD setting is unavailable on this hardware configuration.'
      }
    },
    pros: ['Official PUBG Mobile Super League tournament partner', 'Up to 120 FPS gaming with Pixelworks chip', 'Cyber mecha design with gaming RGB'],
    cons: ['Bloatware in XOS needs cleaning', 'Plastic back'],
    verdict: 'Designed specifically for competitive PUBG Mobile esports. Exceptional value with tournament validation.'
  },

  // --- REDMI & XIAOMI ---
  {
    id: 'redmi-note-13-pro-plus',
    brand: 'Redmi',
    model: 'Redmi Note 13 Pro+ 5G',
    slug: 'redmi-note-13-pro-plus-5g',
    brandSlug: 'redmi',
    releaseYear: 2024,
    chipset: 'MediaTek Dimensity 7200 Ultra (4nm)',
    gpu: 'Mali-G610 MC4',
    ramOptions: ['8GB', '12GB'],
    displayRefreshRate: 120,
    screenSize: '6.67" 1.5K Curved AMOLED 120Hz',
    batteryCapacity: 5000,
    antutuScore: 800000,
    gyroscope: 'Hardware Gyro',
    coolingSystem: '4000mm² VC heat dissipation',
    pubgOfficialPartner: false,
    maxSupportedFps: 60,
    overallGamingRating: 8.2,
    popularityRank: 9,
    benchmarkDate: '2024-08-15',
    benchmarkSource: 'Verified Community Benchmarks',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 57,
        fpsMax: 60,
        stabilityScore: 94,
        thermalRisk: 'Low',
        batteryDrainPerHour: 15,
        confidenceLevel: 'Verified',
        notes: 'Locked 60 FPS in Smooth graphics. 90 FPS is not yet officially enabled in the game client.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 55,
        fpsMax: 60,
        stabilityScore: 92,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Very smooth 60 FPS performance.'
      },
      HD: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 52,
        fpsMax: 60,
        stabilityScore: 88,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Maintains 55-60 FPS during normal engagements.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 38,
        fpsMax: 40,
        stabilityScore: 95,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Smooth 40 FPS on HDR.'
      },
      'Ultra HD': {
        supported: false,
        fpsOptions: [],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'Severe',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: 'Not supported.'
      }
    },
    pros: ['Gorgeous 1.5K 120Hz curved display', 'Fast 120W charging', 'Consistent 60 FPS'],
    cons: ['Curved screen can cause accidental touch', 'No native 90 FPS option yet'],
    verdict: 'A premium mid-range phone that offers reliable, rock-steady 60 FPS gaming with great visuals.'
  },
  {
    id: 'redmi-note-12',
    brand: 'Redmi',
    model: 'Redmi Note 12 4G',
    slug: 'redmi-note-12-4g',
    brandSlug: 'redmi',
    releaseYear: 2023,
    chipset: 'Qualcomm Snapdragon 685 (6nm)',
    gpu: 'Adreno 610',
    ramOptions: ['4GB', '6GB', '8GB'],
    displayRefreshRate: 120,
    screenSize: '6.67" AMOLED 120Hz',
    batteryCapacity: 5000,
    antutuScore: 330000,
    gyroscope: 'Hardware Gyro',
    coolingSystem: 'Graphite sheet cooling',
    pubgOfficialPartner: false,
    maxSupportedFps: 40,
    overallGamingRating: 6.4,
    popularityRank: 10,
    benchmarkDate: '2024-07-12',
    benchmarkSource: 'Verified Budget Device Benchmarks',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['40 FPS (High)', '30 FPS (Medium)'],
        estimatedFps: 40,
        fpsMin: 33,
        fpsMax: 40,
        stabilityScore: 82,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Officially supports Smooth + High (40 FPS max). Drops to 32-35 FPS during intense close-range squad fights.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['30 FPS (Medium)'],
        estimatedFps: 30,
        fpsMin: 27,
        fpsMax: 30,
        stabilityScore: 86,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Playable at 30 FPS. Noticeable input delay compared to 60 FPS.'
      },
      HD: {
        supported: false,
        fpsOptions: [],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'High',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: 'HD graphics setting is not supported by PUBG Mobile on Adreno 610.'
      },
      HDR: {
        supported: false,
        fpsOptions: [],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'High',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: 'HDR is not supported on this chipset.'
      },
      'Ultra HD': {
        supported: false,
        fpsOptions: [],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'Severe',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: 'Unsupported.'
      }
    },
    pros: ['Very affordable', 'Bright 120Hz AMOLED screen', 'Solid battery longevity'],
    cons: ['Max 40 FPS only', 'Occasional stutter in hot-drops'],
    verdict: 'Decent entry-level device for casual PUBG players. Recommended to stick to Smooth + High for the best experience.'
  },

  // --- iQOO ---
  {
    id: 'iqoo-12',
    brand: 'iQOO',
    model: 'iQOO 12 5G',
    slug: 'iqoo-12-5g',
    brandSlug: 'iqoo',
    releaseYear: 2024,
    chipset: 'Snapdragon 8 Gen 3 + Supercomputing Chip Q1',
    gpu: 'Adreno 750',
    ramOptions: ['12GB LPDDR5X', '16GB LPDDR5X'],
    displayRefreshRate: 144,
    screenSize: '6.78" 1.5K LTPO AMOLED 144Hz 3000nits',
    batteryCapacity: 5000,
    antutuScore: 2150000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: '6K Vapor Chamber Four-Zone Cooling Architecture',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.9,
    popularityRank: 11,
    benchmarkDate: '2024-10-18',
    benchmarkSource: 'Verified Hardware Frame-Time Loggers',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 119,
        fpsMax: 120,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Certified for native 120 FPS. Q1 chip provides intelligent frame rate stabilization with virtually flat frame time graph.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 117,
        fpsMax: 120,
        stabilityScore: 97,
        thermalRisk: 'Low',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Flawless 120 FPS with ambient game details enabled.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 90,
        fpsMax: 90,
        stabilityScore: 100,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Locked 90 FPS with zero drops.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 88,
        fpsMax: 90,
        stabilityScore: 97,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 21,
        confidenceLevel: 'Verified',
        notes: 'Official 90 FPS HDR support.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 60,
        fpsMax: 60,
        stabilityScore: 99,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 24,
        confidenceLevel: 'Verified',
        notes: 'Pure 60 FPS in Ultra HD.'
      }
    },
    pros: ['Among the fastest PUBG phones in the world', 'Dedicated Q1 gaming coprocessor', 'Flat 144Hz screen with instant touch response'],
    cons: ['Funtouch OS UI styling is divisive'],
    verdict: 'An absolute esports monster. Sustains 120 FPS longer and cooler than almost any other smartphone on earth.'
  },
  {
    id: 'iqoo-neo-9-pro',
    brand: 'iQOO',
    model: 'iQOO Neo 9 Pro',
    slug: 'iqoo-neo-9-pro',
    brandSlug: 'iqoo',
    releaseYear: 2024,
    chipset: 'Snapdragon 8 Gen 2 + Supercomputing Chip Q1',
    gpu: 'Adreno 740',
    ramOptions: ['8GB', '12GB'],
    displayRefreshRate: 144,
    screenSize: '6.78" 1.5K AMOLED 144Hz',
    batteryCapacity: 5160,
    antutuScore: 1650000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: '6043mm² VC Liquid Cooling',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.5,
    popularityRank: 12,
    benchmarkDate: '2024-09-20',
    benchmarkSource: 'Verified Benchmark Data',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 114,
        fpsMax: 120,
        stabilityScore: 95,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 21,
        confidenceLevel: 'Verified',
        notes: 'Unlocks Extreme+ 120 FPS. Superb touch sampling and recoil tracking.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 89,
        fpsMax: 90,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Locked 90 FPS.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 88,
        fpsMax: 90,
        stabilityScore: 96,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Stable 90 FPS.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 60,
        fpsMax: 60,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Locked 60 FPS.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 40,
        fpsMax: 40,
        stabilityScore: 99,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 22,
        confidenceLevel: 'Verified',
        notes: 'Locked 40 FPS.'
      }
    },
    pros: ['120 FPS flagship experience under $400', 'Huge vapor chamber', 'Superb battery life'],
    cons: ['Dual tone leather design may not appeal to all'],
    verdict: 'One of the smartest choices for competitive PUBG players seeking 120 FPS without spending flagship money.'
  },

  // --- ONEPLUS ---
  {
    id: 'oneplus-12',
    brand: 'OnePlus',
    model: 'OnePlus 12',
    slug: 'oneplus-12',
    brandSlug: 'oneplus',
    releaseYear: 2024,
    chipset: 'Snapdragon 8 Gen 3 (4nm)',
    gpu: 'Adreno 750',
    ramOptions: ['12GB', '16GB', '24GB LPDDR5X'],
    displayRefreshRate: 120,
    screenSize: '6.82" 2K ProXDR LTPO AMOLED 120Hz',
    batteryCapacity: 5400,
    antutuScore: 2110000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: 'Dual Cryo-velocity VC (9,140mm²)',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.7,
    popularityRank: 13,
    benchmarkDate: '2024-10-05',
    benchmarkSource: 'Verified OxygenOS 14.1 Game Engine Logs',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 116,
        fpsMax: 120,
        stabilityScore: 97,
        thermalRisk: 'Low',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Supports 120 FPS in PUBG Mobile. Huge dual vapor chamber prevents thermal throttling.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 114,
        fpsMax: 120,
        stabilityScore: 95,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Maintains 118-120 FPS with heightened detail.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 89,
        fpsMax: 90,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Stable 90 FPS.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 87,
        fpsMax: 90,
        stabilityScore: 96,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Supports 90 FPS HDR.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 59,
        fpsMax: 60,
        stabilityScore: 98,
        thermalRisk: 'High',
        batteryDrainPerHour: 24,
        confidenceLevel: 'Verified',
        notes: 'Flawless 60 FPS in Ultra HD.'
      }
    },
    pros: ['Massive 5400mAh battery for 5+ hours gaming', 'Dual VC cooling system', 'Super fast 100W charging'],
    cons: ['Curved edges take getting used to'],
    verdict: 'A premium, well-rounded powerhouse that runs PUBG at 120 FPS with outstanding battery endurance.'
  },
  {
    id: 'oneplus-12r',
    brand: 'OnePlus',
    model: 'OnePlus 12R',
    slug: 'oneplus-12r',
    brandSlug: 'oneplus',
    releaseYear: 2024,
    chipset: 'Snapdragon 8 Gen 2 (4nm)',
    gpu: 'Adreno 740',
    ramOptions: ['8GB', '16GB LPDDR5X'],
    displayRefreshRate: 120,
    screenSize: '6.78" 1.5K LTPO4 AMOLED 120Hz',
    batteryCapacity: 5500,
    antutuScore: 1530000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: 'Dual Cryo-velocity VC (9,140mm²)',
    pubgOfficialPartner: false,
    maxSupportedFps: 90,
    overallGamingRating: 9.3,
    popularityRank: 15,
    benchmarkDate: '2024-09-10',
    benchmarkSource: 'Verified OxygenOS Benchmarks',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 88,
        fpsMax: 90,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 14,
        confidenceLevel: 'Verified',
        notes: 'Rock solid 90 FPS. Incredibly low battery consumption thanks to 5500mAh capacity.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 88,
        fpsMax: 90,
        stabilityScore: 97,
        thermalRisk: 'Low',
        batteryDrainPerHour: 15,
        confidenceLevel: 'Verified',
        notes: 'Near zero frame drops.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 87,
        fpsMax: 90,
        stabilityScore: 95,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'High clarity with 90 FPS.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 60,
        fpsMax: 60,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Solid 60 FPS.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 40,
        fpsMax: 40,
        stabilityScore: 99,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Stable 40 FPS.'
      }
    },
    pros: ['Enormous 5500mAh battery', 'Snapdragon 8 Gen 2 reliability', 'Outstanding thermal management'],
    cons: ['120 FPS mode awaiting patch rollout in some regions'],
    verdict: 'The battery champion for long PUBG sessions. Runs 90 FPS like a breeze without heating up.'
  },

  // --- REALME ---
  {
    id: 'realme-gt-6',
    brand: 'Realme',
    model: 'Realme GT 6',
    slug: 'realme-gt-6',
    brandSlug: 'realme',
    releaseYear: 2024,
    chipset: 'Snapdragon 8s Gen 3 (4nm)',
    gpu: 'Adreno 735',
    ramOptions: ['8GB', '12GB', '16GB'],
    displayRefreshRate: 120,
    screenSize: '6.78" 1.5K 8T LTPO 6000nits 120Hz',
    batteryCapacity: 5500,
    antutuScore: 1630000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: '10,014mm² Dual VC Iceberg Cooling System',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.4,
    popularityRank: 16,
    benchmarkDate: '2024-09-18',
    benchmarkSource: 'Verified Real World Test Logs',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 112,
        fpsMax: 120,
        stabilityScore: 94,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Supports Extreme+ 120 FPS mode in PUBG Mobile. Superb peak brightness for outdoor play.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 88,
        fpsMax: 90,
        stabilityScore: 97,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Locked 90 FPS.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 87,
        fpsMax: 90,
        stabilityScore: 95,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Stable 90 FPS on HD.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 60,
        fpsMax: 60,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Locked 60 FPS.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 40,
        fpsMax: 40,
        stabilityScore: 98,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 22,
        confidenceLevel: 'Verified',
        notes: 'Smooth 40 FPS.'
      }
    },
    pros: ['Record breaking 6000 nits peak screen', '10,000mm² massive cooling system', '120 FPS support'],
    cons: ['Aggressive power management requires GT Mode'],
    verdict: 'A brilliant flagship killer with 120 FPS PUBG capabilities and the brightest display on the market.'
  },

  // --- ASUS ROG ---
  {
    id: 'asus-rog-phone-8-pro',
    brand: 'ASUS',
    model: 'ROG Phone 8 Pro',
    slug: 'rog-phone-8-pro',
    brandSlug: 'asus',
    releaseYear: 2024,
    chipset: 'Snapdragon 8 Gen 3 (4nm)',
    gpu: 'Adreno 750',
    ramOptions: ['16GB', '24GB LPDDR5X'],
    displayRefreshRate: 165,
    screenSize: '6.78" FHD+ Samsung Flexible AMOLED 165Hz',
    batteryCapacity: 5500,
    antutuScore: 2220000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: 'GameCool 8 360-degree SoC Cooling System + AeroActive Cooler X',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.9,
    popularityRank: 17,
    benchmarkDate: '2024-10-12',
    benchmarkSource: 'Armoury Crate Real-Time Telemetry',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 119,
        fpsMax: 120,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: 'Pure esports hardware. Built-in ultrasonic AirTriggers eliminate need for claw grip. Locked 120 FPS.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 118,
        fpsMax: 120,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Unshakable 120 FPS.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 90,
        fpsMax: 90,
        stabilityScore: 100,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Zero frame drop 90 FPS.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 89,
        fpsMax: 90,
        stabilityScore: 98,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'High visual dynamic range with 90 FPS.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 60,
        fpsMax: 60,
        stabilityScore: 99,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 23,
        confidenceLevel: 'Verified',
        notes: 'Flawless 60 FPS in Ultra HD.'
      }
    },
    pros: ['Ultrasonic AirTriggers give competitive advantage', 'Sub-12ms touch latency', 'Bypass charging port on side'],
    cons: ['Priced at premium gaming tier'],
    verdict: 'The purest dedicated gaming phone ever crafted. Unmatched frame consistency and ergonomic gaming features.'
  },

  // --- GOOGLE PIXEL (GLOBAL REPOSITORY - 24+ MODELS) ---
  ...PIXEL_DEVICES,

  // --- HUAWEI (GLOBAL REPOSITORY - 71+ MODELS) ---
  ...HUAWEI_DEVICES,

  // --- VIVO (GLOBAL REPOSITORY - 35+ MODELS) ---
  ...VIVO_DEVICES,

  // --- TECNO ---
  {
    id: 'tecno-camon-30-pro',
    brand: 'Tecno',
    model: 'Tecno Camon 30 Pro 5G',
    slug: 'tecno-camon-30-pro-5g',
    brandSlug: 'tecno',
    releaseYear: 2024,
    chipset: 'MediaTek Dimensity 8200 Ultimate (4nm)',
    gpu: 'Mali-G610 MC6',
    ramOptions: ['12GB'],
    displayRefreshRate: 144,
    screenSize: '6.78" AMOLED 144Hz',
    batteryCapacity: 5000,
    antutuScore: 940000,
    gyroscope: 'Hardware Gyro',
    coolingSystem: '10-layer gaming liquid cooling chamber',
    pubgOfficialPartner: false,
    maxSupportedFps: 90,
    overallGamingRating: 8.9,
    popularityRank: 19,
    benchmarkDate: '2024-09-05',
    benchmarkSource: 'Verified HiOS Gaming Tests',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 84,
        fpsMax: 90,
        stabilityScore: 92,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Native 90 FPS support on Smooth. Highly stable performance in Livik and Sanhok.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 82,
        fpsMax: 90,
        stabilityScore: 90,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Reliable 90 FPS with good shadow detail.'
      },
      HD: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 58,
        fpsMax: 60,
        stabilityScore: 96,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Locked 60 FPS.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 57,
        fpsMax: 60,
        stabilityScore: 94,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Smooth 60 FPS.'
      },
      'Ultra HD': {
        supported: false,
        fpsOptions: [],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'High',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: 'Not supported.'
      }
    },
    pros: ['Dimensity 8200 Ultimate at an affordable price', 'Fast 144Hz AMOLED screen', 'Official 90 FPS support'],
    cons: ['HiOS software notifications need tuning'],
    verdict: 'A sleeper hit budget gaming smartphone running PUBG at 90 FPS with surprising consistency.'
  },

  // --- OPPO (GLOBAL REPOSITORY - 37+ MODELS) ---
  ...OPPO_DEVICES,

  // --- XIAOMI (GLOBAL REPOSITORY - 22+ MODELS) ---
  ...XIAOMI_DEVICES,

  // --- POCO (GLOBAL REPOSITORY - 23+ MODELS) ---
  ...POCO_DEVICES,

  // --- REDMI (GLOBAL REPOSITORY - 27+ MODELS) ---
  ...REDMI_DEVICES,

  // --- MOTOROLA (GLOBAL REPOSITORY - 28+ MODELS) ---
  ...MOTOROLA_DEVICES,

  // --- LG (GLOBAL REPOSITORY - 31+ MODELS) ---
  ...LG_DEVICES,

  // --- QMOBILE (PAKISTANI REPOSITORY - 23+ MODELS) ---
  ...QMOBILE_DEVICES,

  // --- ONEPLUS (GLOBAL REPOSITORY - 14+ MODELS) ---
  ...ONEPLUS_DEVICES,

  // --- REALME (GLOBAL REPOSITORY - 11+ MODELS) ---
  ...REALME_DEVICES,

  // --- INFINIX (GLOBAL REPOSITORY - 9+ MODELS) ---
  ...INFINIX_DEVICES,

  // --- TECNO (GLOBAL REPOSITORY - 7+ MODELS) ---
  ...TECNO_DEVICES,

  // --- ASUS & ROG PHONE (GLOBAL REPOSITORY - 5+ MODELS) ---
  ...ASUS_DEVICES,

  // --- ZTE & NUBIA (GLOBAL REPOSITORY - 8 MODELS) ---
  ...ZTE_DEVICES,

  // --- REDMAGIC ESPORTS & GAMING (1ST GEN TO 12 PRO & TABLETS - 53 MODELS) ---
  ...REDMAGIC_DEVICES,

  // --- HONOR (GLOBAL REPOSITORY - 6+ MODELS) ---
  ...HONOR_DEVICES,

  // --- NOTHING & CMF (GLOBAL REPOSITORY - 3+ MODELS) ---
  ...NOTHING_DEVICES,

  // --- SONY XPERIA (GLOBAL REPOSITORY - 3+ MODELS) ---
  ...SONY_DEVICES,

  // --- DEDICATED ESPORTS TABLETS (5+ MODELS) ---
  ...TABLET_DEVICES,

  // --- BLACK SHARK (XIAOMI GAMING - 14 MODELS) ---
  ...BLACK_SHARK_DEVICES,

  // --- LENOVO LEGION (6 MODELS) ---
  ...LEGION_DEVICES,

  // --- RAZER GAMING (2 MODELS) ---
  ...RAZER_DEVICES,

  // --- VIVO iQOO ESPORTS (20 MODELS) ---
  ...IQOO_DEVICES,

  // --- GLOBAL & LEGACY BRANDS (NOKIA, LENOVO, ITEL, HTC, BLU, ETC. - 17+ MODELS) ---
  ...GLOBAL_BRANDS_DEVICES
];

// De-duplicate devices by brandSlug + slug and ensure unique IDs across static generation & UI lists
const seenDeviceKeys = new Set<string>();
const seenDeviceIds = new Set<string>();
export const DEVICES_DATA: DeviceInfo[] = RAW_DEVICES.filter((d) => {
  const key = `${d.brandSlug.toLowerCase()}/${d.slug.toLowerCase()}`;
  if (seenDeviceKeys.has(key)) return false;
  seenDeviceKeys.add(key);
  return true;
}).map((d) => {
  let uniqueId = d.id;
  if (seenDeviceIds.has(uniqueId)) {
    uniqueId = d.slug && !seenDeviceIds.has(d.slug) ? d.slug : `${d.brandSlug}-${d.slug}`;
  }
  seenDeviceIds.add(uniqueId);
  return uniqueId === d.id ? d : { ...d, id: uniqueId };
});

export const ALL_BRANDS = Array.from(new Set(DEVICES_DATA.map((d) => d.brand))).sort();

export function getDeviceBySlug(slug: string): DeviceInfo | undefined {
  return DEVICES_DATA.find((d) => d.slug.toLowerCase() === slug.toLowerCase() || d.id === slug);
}

export function getDevicesByBrand(brand: string): DeviceInfo[] {
  const b = brand.toLowerCase();
  return DEVICES_DATA.filter((d) => {
    const brandLower = d.brand.toLowerCase();
    const slugLower = d.brandSlug.toLowerCase();
    if (brandLower === b || slugLower === b) return true;
    if ((b === 'google' || b === 'pixel' || b === 'google-pixel') && (brandLower.includes('google') || slugLower.includes('google'))) return true;
    if ((b === 'xiaomi' || b === 'mi') && (brandLower === 'xiaomi' || slugLower === 'xiaomi')) return true;
    if (b === 'poco' && (brandLower === 'poco' || slugLower === 'poco')) return true;
    if (b === 'redmi' && (brandLower === 'redmi' || slugLower === 'redmi')) return true;
    if (b === 'vivo' && (brandLower === 'vivo' || slugLower === 'vivo')) return true;
    if ((b === 'motorola' || b === 'moto') && (brandLower === 'motorola' || slugLower === 'motorola')) return true;
    if (b === 'lg' && (brandLower === 'lg' || slugLower === 'lg')) return true;
    if ((b === 'qmobile' || b === 'q-mobile' || b === 'q mobile') && (brandLower === 'qmobile' || slugLower === 'qmobile')) return true;
    if ((b === 'oneplus' || b === '1+') && (brandLower === 'oneplus' || slugLower === 'oneplus')) return true;
    if (b === 'realme' && (brandLower === 'realme' || slugLower === 'realme')) return true;
    if (b === 'infinix' && (brandLower === 'infinix' || slugLower === 'infinix')) return true;
    if (b === 'tecno' && (brandLower === 'tecno' || slugLower === 'tecno')) return true;
    if ((b === 'asus' || b === 'rog' || b === 'asus-rog') && (brandLower.includes('asus') || slugLower.includes('asus'))) return true;
    if ((b === 'redmagic' || b === 'red-magic') && (brandLower === 'redmagic' || slugLower === 'redmagic')) return true;
    if ((b === 'zte' || b === 'nubia') && (brandLower === 'zte' || slugLower === 'zte' || brandLower.includes('nubia') || slugLower.includes('nubia') || brandLower === 'redmagic' || slugLower === 'redmagic')) return true;
    if (b === 'honor' && (brandLower === 'honor' || slugLower === 'honor')) return true;
    if ((b === 'nothing' || b === 'cmf') && (brandLower === 'nothing' || slugLower === 'nothing')) return true;
    if ((b === 'sony' || b === 'xperia') && (brandLower === 'sony' || slugLower === 'sony')) return true;
    if ((b === 'nokia' || b === 'hmd') && (brandLower === 'nokia' || slugLower === 'nokia')) return true;
    if ((b === 'lenovo' || b === 'legion') && (brandLower === 'lenovo' || slugLower === 'lenovo')) return true;
    if (b === 'itel' && (brandLower === 'itel' || slugLower === 'itel')) return true;
    if ((b === 'iqoo' || b === 'i-qoo') && (brandLower === 'iqoo' || slugLower === 'iqoo')) return true;
    if (b === 'meizu' && (brandLower === 'meizu' || slugLower === 'meizu')) return true;
    if ((b === 'black-shark' || b === 'blackshark') && (brandLower.includes('black') || slugLower.includes('black'))) return true;
    if (b === 'razer' && (brandLower === 'razer' || slugLower === 'razer')) return true;
    if (b === 'htc' && (brandLower === 'htc' || slugLower === 'htc')) return true;
    if ((b === 'blackberry' || b === 'bb') && (brandLower === 'blackberry' || slugLower === 'blackberry')) return true;
    if (b === 'blackview' && (brandLower === 'blackview' || slugLower === 'blackview')) return true;
    if (b === 'ulefone' && (brandLower === 'ulefone' || slugLower === 'ulefone')) return true;
    if (b === 'doogee' && (brandLower === 'doogee' || slugLower === 'doogee')) return true;
    if (b === 'lava' && (brandLower === 'lava' || slugLower === 'lava')) return true;
    if (b === 'micromax' && (brandLower === 'micromax' || slugLower === 'micromax')) return true;
    if (b === 'blu' && (brandLower === 'blu' || slugLower === 'blu')) return true;
    if (b === 'alcatel' && (brandLower === 'alcatel' || slugLower === 'alcatel')) return true;
    if (b === 'acer' && (brandLower === 'acer' || slugLower === 'acer')) return true;
    return false;
  });
}

export function searchDevices(query: string): DeviceInfo[] {
  return searchDevicesWithFuzzy(DEVICES_DATA, query);
}

// Thermal throttling curve calculator over time
export function getThermalThrottledFps(
  baseFps: number,
  thermalRisk: 'Low' | 'Moderate' | 'High' | 'Severe',
  minutesPlayed: number
): { throttledFps: number; temperature: number; throttlingPercent: number } {
  if (baseFps === 0) return { throttledFps: 0, temperature: 30, throttlingPercent: 0 };

  // Ambient 32°C base temp
  let tempRisePerMin = 0.35;
  let dropFactor = 0;

  if (thermalRisk === 'Low') {
    tempRisePerMin = 0.22;
    if (minutesPlayed > 20) dropFactor = 0.03; // drops 3% max
  } else if (thermalRisk === 'Moderate') {
    tempRisePerMin = 0.35;
    if (minutesPlayed > 15) dropFactor = 0.08; // drops 8%
    if (minutesPlayed > 30) dropFactor = 0.12; // drops 12%
  } else if (thermalRisk === 'High') {
    tempRisePerMin = 0.48;
    if (minutesPlayed > 10) dropFactor = 0.12;
    if (minutesPlayed > 25) dropFactor = 0.22; // drops 22%
  } else {
    tempRisePerMin = 0.6;
    if (minutesPlayed > 10) dropFactor = 0.25;
    if (minutesPlayed > 25) dropFactor = 0.4;
  }

  const estimatedTemp = Math.min(Math.round(33 + tempRisePerMin * minutesPlayed), 47);
  const throttledFps = Math.max(Math.round(baseFps * (1 - dropFactor)), 20);
  const throttlingPercent = Math.round(dropFactor * 100);

  return { throttledFps, temperature: estimatedTemp, throttlingPercent };
}

export function calculateFps(device: DeviceInfo, graphicsMode: GraphicsTier): FpsCalculationResult {
  // Check for hardware insufficient / unsupported devices (e.g. Galaxy A03 Core, A02, J2 Core, J1 Ace)
  if (device.isUnsupportedHardware || device.maxSupportedFps === 0) {
    return {
      device,
      graphicsMode,
      setting: {
        supported: false,
        fpsOptions: ['0 FPS (Unsupported)'],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'Severe',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: `${device.brand} ${device.model} does not meet PUBG Mobile minimum 64-bit OS & 3GB RAM requirements. Standard PUBG Mobile fails to boot or crashes on the spawn island.`
      },
      estimatedFps: 0,
      fpsRange: [0, 0],
      stability: 0,
      performanceCategory: 'Hardware Incompatible / Unsupported',
      statusDescription: 'Hardware Incompatible — PUBG Mobile Unsupported',
      recommendation: `${device.brand} ${device.model} has insufficient RAM / CPU architecture for PUBG Mobile. The game will freeze, fail to install from Play Store, or crash immediately. A device with at least 40-60 FPS capability is recommended.`,
      isVerified: true,
      benchmarkSource: 'Hardware Architecture & PUBG Mobile Minimum Spec Matrix'
    };
  }

  const setting = device.graphicsModes[graphicsMode];

  if (!setting || !setting.supported) {
    return {
      device,
      graphicsMode,
      setting: setting || {
        supported: false,
        fpsOptions: [],
        estimatedFps: 0,
        fpsMin: 0,
        fpsMax: 0,
        stabilityScore: 0,
        thermalRisk: 'High',
        batteryDrainPerHour: 0,
        confidenceLevel: 'Unsupported',
        notes: `${graphicsMode} graphics mode is currently unsupported or disabled on ${device.model} by PUBG Mobile client.`
      },
      estimatedFps: 0,
      fpsRange: [0, 0],
      stability: 0,
      performanceCategory: 'Unsupported Setting',
      statusDescription: 'This graphics setting is officially locked or unsupported on this device.',
      recommendation: `Switch to Smooth or Balanced mode to play at ${device.maxSupportedFps} FPS on ${device.model}.`,
      isVerified: true,
      benchmarkSource: device.benchmarkSource
    };
  }

  const fps = setting.estimatedFps;
  let performanceCategory: FpsCalculationResult['performanceCategory'] = 'Smooth & Fluid';
  let statusDescription = 'Good Gaming Performance';

  if (fps >= 115) {
    performanceCategory = 'Competitive Elite';
    statusDescription = 'Tournament Tier 120 FPS Performance';
  } else if (fps >= 85) {
    performanceCategory = 'Competitive Elite';
    statusDescription = 'Ultra Fluid 90 FPS Esports Tier';
  } else if (fps >= 58) {
    performanceCategory = 'Smooth & Fluid';
    statusDescription = 'Rock Solid 60 FPS Performance';
  } else if (fps >= 38) {
    performanceCategory = 'Playable Casual';
    statusDescription = 'Playable Casual Gaming (40 FPS)';
  } else {
    performanceCategory = 'Challenging / Laggy';
    statusDescription = 'Low FPS - Lag & Frame Drops Expected';
  }

  let recommendation = `For optimal competitive response, select "Smooth" graphics with the highest available frame rate (${device.maxSupportedFps} FPS).`;
  if (graphicsMode === 'Smooth' && fps >= 90) {
    recommendation = `Optimal configuration! You are extracting peak ${fps} FPS esports fluidity from your ${device.chipset}.`;
  } else if (graphicsMode === 'Ultra HD') {
    recommendation = `Ultra HD prioritizes visual cinematic fidelity over reaction speed. If you play ranked classic matches, switch to Smooth for lower input latency.`;
  }

  return {
    device,
    graphicsMode,
    setting,
    estimatedFps: fps,
    fpsRange: [setting.fpsMin, setting.fpsMax],
    stability: setting.stabilityScore,
    performanceCategory,
    statusDescription,
    recommendation,
    isVerified: setting.confidenceLevel === 'Verified',
    benchmarkSource: device.benchmarkSource
  };
}
