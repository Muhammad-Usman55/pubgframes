export type GraphicsTier = 'Smooth' | 'Balanced' | 'HD' | 'HDR' | 'Ultra HD';

export type FpsOption = '30 FPS (Medium)' | '40 FPS (High)' | '60 FPS (Ultra)' | '90 FPS (Extreme)' | '120 FPS (Extreme+)';

export interface GraphicsSettingPerformance {
  supported: boolean;
  fpsOptions: FpsOption[];
  estimatedFps: number; // e.g. 60, 90, 45, 0 if unsupported
  fpsMin: number;
  fpsMax: number;
  stabilityScore: number; // percentage (e.g. 95)
  thermalRisk: 'Low' | 'Moderate' | 'High' | 'Severe';
  batteryDrainPerHour: number; // percentage e.g. 18%
  confidenceLevel: 'Verified' | 'Community Tested' | 'Estimated' | 'Unsupported';
  notes?: string;
}

export interface DeviceInfo {
  id: string;
  brand: string; // e.g. "Samsung", "Xiaomi", "POCO", "Apple", "OnePlus", "iQOO", "Realme", "Infinix", "Tecno", "Google", "Vivo", "OPPO", "ASUS"
  model: string; // e.g. "Galaxy S24 Ultra", "POCO F6 Pro", "iPhone 15 Pro Max"
  slug: string; // url friendly e.g. "galaxy-s24-ultra"
  brandSlug: string; // e.g. "samsung"
  releaseYear: number;
  chipset: string; // e.g. "Snapdragon 8 Gen 3"
  gpu: string; // e.g. "Adreno 750"
  ramOptions: string[]; // e.g. ["8GB", "12GB", "16GB"]
  displayRefreshRate: number; // e.g. 120 or 144 or 60 or 90
  screenSize: string; // e.g. "6.8\" AMOLED"
  batteryCapacity: number; // e.g. 5000 mAh
  antutuScore?: number;
  gyroscope: 'Ultra Fast Hardware Gyro' | 'Hardware Gyro' | 'Software Gyro' | 'Not Supported';
  coolingSystem: string; // e.g. "Vapor Chamber Dual Loop"
  pubgOfficialPartner?: boolean;
  maxSupportedFps: 30 | 40 | 60 | 90 | 120;
  overallGamingRating: number; // 1-10 e.g. 9.4
  popularityRank: number;
  benchmarkDate: string;
  benchmarkSource: string;
  graphicsModes: Record<GraphicsTier, GraphicsSettingPerformance>;
  pros: string[];
  cons: string[];
  verdict: string;
}

export interface FpsCalculationResult {
  device: DeviceInfo;
  graphicsMode: GraphicsTier;
  setting: GraphicsSettingPerformance;
  estimatedFps: number;
  fpsRange: [number, number];
  stability: number;
  performanceCategory: 'Competitive Elite' | 'Smooth & Fluid' | 'Playable Casual' | 'Challenging / Laggy' | 'Unsupported Setting';
  statusDescription: string;
  recommendation: string;
  isVerified: boolean;
  benchmarkSource: string;
}
