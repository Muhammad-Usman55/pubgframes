import { DeviceInfo, FpsCalculationResult, GraphicsTier } from '@/types/device';

export const DEVICES_DATA: DeviceInfo[] = [
  // POCO
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

  // Apple
  {
    id: 'apple-iphone-15-pro-max',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    brandSlug: 'apple',
    releaseYear: 2023,
    chipset: 'Apple A17 Pro (3nm)',
    gpu: 'Apple 6-Core GPU with Hardware Ray Tracing',
    ramOptions: ['8GB unified memory'],
    displayRefreshRate: 120,
    screenSize: '6.7" Super Retina XDR OLED 120Hz ProMotion',
    batteryCapacity: 4422,
    antutuScore: 1540000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: 'Titanium chassis thermal conduction',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.7,
    popularityRank: 3,
    benchmarkDate: '2024-10-10',
    benchmarkSource: 'Verified iOS 18 Metal Benchmarks',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 116,
        fpsMax: 120,
        stabilityScore: 97,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 21,
        confidenceLevel: 'Verified',
        notes: 'Supports PUBG 120 FPS mode. Remarkable touch response latency (sub 15ms).'
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
        notes: 'Consistent 90 FPS performance across all tournament maps.'
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
        notes: 'Superb graphics fidelity with locked 90 FPS.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 60,
        fpsMax: 60,
        stabilityScore: 100,
        thermalRisk: 'Low',
        batteryDrainPerHour: 15,
        confidenceLevel: 'Verified',
        notes: 'Ultra smooth 60 FPS with full P3 wide color gamut.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 57,
        fpsMax: 60,
        stabilityScore: 94,
        thermalRisk: 'High',
        batteryDrainPerHour: 26,
        confidenceLevel: 'Verified',
        notes: 'Ultra HD supported at 60 FPS on A17 Pro. May dim screen brightness if phone gets hot.'
      }
    },
    pros: ['Class leading 120 FPS stability', 'Zero input lag iOS touch response', 'Pro esports favorite'],
    cons: ['Screen brightness dimming when overheated without cooler', 'Expensive'],
    verdict: 'The gold standard for tournament and esports PUBG Mobile players worldwide.'
  },
  {
    id: 'apple-iphone-13',
    brand: 'Apple',
    model: 'iPhone 13',
    slug: 'iphone-13',
    brandSlug: 'apple',
    releaseYear: 2021,
    chipset: 'Apple A15 Bionic (5nm)',
    gpu: 'Apple 4-Core GPU',
    ramOptions: ['4GB unified memory'],
    displayRefreshRate: 60,
    screenSize: '6.1" Super Retina XDR OLED',
    batteryCapacity: 3240,
    antutuScore: 1280000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: 'Aluminum frame heat spreader',
    pubgOfficialPartner: false,
    maxSupportedFps: 60,
    overallGamingRating: 8.8,
    popularityRank: 7,
    benchmarkDate: '2024-08-20',
    benchmarkSource: 'Verified iOS Benchmarks',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 59,
        fpsMax: 60,
        stabilityScore: 99,
        thermalRisk: 'Low',
        batteryDrainPerHour: 15,
        confidenceLevel: 'Verified',
        notes: 'Rock solid 60 FPS locked. Display is 60Hz so 90 FPS is not available.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 59,
        fpsMax: 60,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 16,
        confidenceLevel: 'Verified',
        notes: 'Smooth 60 FPS with excellent battery efficiency.'
      },
      HD: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 58,
        fpsMax: 60,
        stabilityScore: 97,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Consistent 60 FPS in dense smokes and combat zones.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 57,
        fpsMax: 60,
        stabilityScore: 95,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Vibrant HDR colors with locked 60 FPS.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 39,
        fpsMax: 40,
        stabilityScore: 96,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 22,
        confidenceLevel: 'Verified',
        notes: 'Supported at 40 FPS.'
      }
    },
    pros: ['Rock solid 60 FPS without frame drops', 'Excellent gyro precision', 'Compact form factor'],
    cons: ['Limited to 60Hz display refresh rate', 'Screen notch'],
    verdict: 'The best value 60 FPS iPhone for PUBG. Delivers uncompromised 60 FPS consistency.'
  },

  // Samsung
  {
    id: 'samsung-galaxy-s24-ultra',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    slug: 'galaxy-s24-ultra',
    brandSlug: 'samsung',
    releaseYear: 2024,
    chipset: 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
    gpu: 'Adreno 750 (1000 MHz)',
    ramOptions: ['12GB LPDDR5X'],
    displayRefreshRate: 120,
    screenSize: '6.8" Dynamic LTPO AMOLED 2X 120Hz Anti-Reflective',
    batteryCapacity: 5000,
    antutuScore: 1980000,
    gyroscope: 'Ultra Fast Hardware Gyro',
    coolingSystem: '1.9x Larger Vapor Chamber',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.8,
    popularityRank: 4,
    benchmarkDate: '2024-10-15',
    benchmarkSource: 'PUBGFrames Lab One UI 6.1.1 Tests',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 118,
        fpsMax: 120,
        stabilityScore: 98,
        thermalRisk: 'Low',
        batteryDrainPerHour: 18,
        confidenceLevel: 'Verified',
        notes: 'Officially certified for 120 FPS in PUBG Mobile. Vapor chamber keeps it cool under heavy load.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)', '120 FPS (Extreme+)'],
        estimatedFps: 120,
        fpsMin: 115,
        fpsMax: 120,
        stabilityScore: 96,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Incredible 120 FPS smoothness on Balanced settings.'
      },
      HD: {
        supported: true,
        fpsOptions: ['90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 89,
        fpsMax: 90,
        stabilityScore: 99,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Flawless 90 FPS performance on high resolution textures.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)', '90 FPS (Extreme)'],
        estimatedFps: 90,
        fpsMin: 87,
        fpsMax: 90,
        stabilityScore: 96,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 21,
        confidenceLevel: 'Verified',
        notes: 'Supports 90 FPS even on HDR graphics mode.'
      },
      'Ultra HD': {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 59,
        fpsMax: 60,
        stabilityScore: 98,
        thermalRisk: 'High',
        batteryDrainPerHour: 25,
        confidenceLevel: 'Verified',
        notes: 'Stunning 4K fidelity with locked 60 FPS.'
      }
    },
    pros: ['Anti-reflective flat screen reduces glare', 'Official 120 FPS support', 'Massive cooling vapor chamber'],
    cons: ['Heavy in hand (232g) during long sessions'],
    verdict: 'The ultimate Android powerhouse for PUBG Mobile. Top-tier 120 FPS performance with zero thermal throttling.'
  },
  {
    id: 'samsung-galaxy-a55-5g',
    brand: 'Samsung',
    model: 'Galaxy A55 5G',
    slug: 'galaxy-a55-5g',
    brandSlug: 'samsung',
    releaseYear: 2024,
    chipset: 'Exynos 1480 (4nm, AMD RDNA 2 Xclipse 530)',
    gpu: 'Xclipse 530',
    ramOptions: ['8GB', '12GB'],
    displayRefreshRate: 120,
    screenSize: '6.6" Super AMOLED 120Hz',
    batteryCapacity: 5000,
    antutuScore: 720000,
    gyroscope: 'Hardware Gyro',
    coolingSystem: 'Integrated heat spreader',
    pubgOfficialPartner: false,
    maxSupportedFps: 60,
    overallGamingRating: 7.9,
    popularityRank: 12,
    benchmarkDate: '2024-09-01',
    benchmarkSource: 'Verified One UI 6 Benchmarks',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 56,
        fpsMax: 60,
        stabilityScore: 92,
        thermalRisk: 'Low',
        batteryDrainPerHour: 14,
        confidenceLevel: 'Verified',
        notes: 'Supports up to Ultra (60 FPS) in Smooth mode. Stable 58-60 FPS in general matches.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 54,
        fpsMax: 60,
        stabilityScore: 90,
        thermalRisk: 'Low',
        batteryDrainPerHour: 15,
        confidenceLevel: 'Verified',
        notes: 'Good visual clarity with solid 60 FPS.'
      },
      HD: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 50,
        fpsMax: 60,
        stabilityScore: 84,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 17,
        confidenceLevel: 'Verified',
        notes: '60 FPS supported; drops to ~52 FPS during heavy combat in Hotdrops like Georgopol.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['40 FPS (High)'],
        estimatedFps: 40,
        fpsMin: 38,
        fpsMax: 40,
        stabilityScore: 94,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Capped at 40 FPS High on HDR.'
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
        notes: 'Ultra HD graphics is not officially supported on Galaxy A55.'
      }
    },
    pros: ['AMD RDNA 2 GPU architecture', 'Super AMOLED 120Hz display', 'Outstanding battery life'],
    cons: ['90 FPS not unlocked in PUBG Mobile yet'],
    verdict: 'Reliable mid-ranger that delivers dependable 60 FPS gaming with low temperatures.'
  },

  // Infinix
  {
    id: 'infinix-gt-20-pro',
    brand: 'Infinix',
    model: 'Infinix GT 20 Pro',
    slug: 'infinix-gt-20-pro',
    brandSlug: 'infinix',
    releaseYear: 2024,
    chipset: 'MediaTek Dimensity 8200 Ultimate (4nm) + Pixelworks X5 Turbo Gaming Display Chip',
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
    popularityRank: 5,
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

  // Xiaomi & Redmi
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
    popularityRank: 6,
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
    cons: ['Curved screen can cause accidental touch without palm rejection tweak', 'No native 90 FPS option yet'],
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

  // iQOO
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
    popularityRank: 8,
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
    popularityRank: 9,
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

  // OnePlus
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
    popularityRank: 11,
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
    cons: ['Curved edges can take getting used to'],
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
    popularityRank: 13,
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
    cons: ['120 FPS mode currently awaiting official rollout in some game patches'],
    verdict: 'The battery champion for long PUBG sessions. Runs 90 FPS like a breeze without heating up.'
  },

  // Realme
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
    popularityRank: 14,
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
    cons: ['Aggressive default power management requires turning on GT Mode'],
    verdict: 'A brilliant flagship killer with 120 FPS PUBG capabilities and the brightest display on the market.'
  },

  // ASUS ROG
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
    coolingSystem: 'GameCool 8 360-degree SoC Cooling System Gen 2 + AeroActive Cooler X support',
    pubgOfficialPartner: false,
    maxSupportedFps: 120,
    overallGamingRating: 9.9,
    popularityRank: 15,
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

  // Google Pixel
  {
    id: 'google-pixel-8-pro',
    brand: 'Google Pixel',
    model: 'Pixel 8 Pro',
    slug: 'pixel-8-pro',
    brandSlug: 'google-pixel',
    releaseYear: 2023,
    chipset: 'Google Tensor G3 (4nm)',
    gpu: 'Immortalis-G715s MC10',
    ramOptions: ['12GB LPDDR5X'],
    displayRefreshRate: 120,
    screenSize: '6.7" Super Actua LTPO OLED 120Hz',
    batteryCapacity: 5050,
    antutuScore: 1140000,
    gyroscope: 'Hardware Gyro',
    coolingSystem: 'Copper vapor and graphite layer',
    pubgOfficialPartner: false,
    maxSupportedFps: 60,
    overallGamingRating: 7.8,
    popularityRank: 16,
    benchmarkDate: '2024-08-10',
    benchmarkSource: 'Verified Android 14 Lab Tests',
    graphicsModes: {
      Smooth: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 54,
        fpsMax: 60,
        stabilityScore: 88,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 19,
        confidenceLevel: 'Verified',
        notes: 'Locked to 60 FPS max in PUBG Mobile. Tensor G3 warms up after 20 minutes, yielding minor frame dips to ~53 FPS.'
      },
      Balanced: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 53,
        fpsMax: 60,
        stabilityScore: 86,
        thermalRisk: 'Moderate',
        batteryDrainPerHour: 20,
        confidenceLevel: 'Verified',
        notes: 'Good 60 FPS performance.'
      },
      HD: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 50,
        fpsMax: 60,
        stabilityScore: 82,
        thermalRisk: 'High',
        batteryDrainPerHour: 22,
        confidenceLevel: 'Verified',
        notes: 'Playable 50-60 FPS; heats up noticeably.'
      },
      HDR: {
        supported: true,
        fpsOptions: ['60 FPS (Ultra)'],
        estimatedFps: 60,
        fpsMin: 48,
        fpsMax: 60,
        stabilityScore: 80,
        thermalRisk: 'High',
        batteryDrainPerHour: 24,
        confidenceLevel: 'Verified',
        notes: 'Drops frames during artillery and smoke barrages.'
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
    pros: ['Magnificent Super Actua flat display', 'Clean Android experience'],
    cons: ['Tensor G3 throttles under sustained 3D load', 'No 90 FPS support'],
    verdict: 'Great camera phone that can handle casual 60 FPS PUBG, but not recommended for hardcore competitive grinders.'
  },

  // Tecno
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
    popularityRank: 17,
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
  }
];

export const ALL_BRANDS = Array.from(new Set(DEVICES_DATA.map((d) => d.brand))).sort();

export function getAllDevices(): DeviceInfo[] {
  return DEVICES_DATA;
}

export function getDeviceById(id: string): DeviceInfo | undefined {
  return DEVICES_DATA.find((d) => d.id === id);
}

export function getDeviceBySlug(slug: string): DeviceInfo | undefined {
  return DEVICES_DATA.find((d) => d.slug.toLowerCase() === slug.toLowerCase() || d.id === slug);
}

export function getDevicesByBrand(brand: string): DeviceInfo[] {
  return DEVICES_DATA.filter(
    (d) => d.brand.toLowerCase() === brand.toLowerCase() || d.brandSlug.toLowerCase() === brand.toLowerCase()
  );
}

export function searchDevices(query: string): DeviceInfo[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return DEVICES_DATA;
  return DEVICES_DATA.filter(
    (d) =>
      d.model.toLowerCase().includes(clean) ||
      d.brand.toLowerCase().includes(clean) ||
      d.chipset.toLowerCase().includes(clean)
  );
}

export function calculateFps(device: DeviceInfo, graphicsMode: GraphicsTier): FpsCalculationResult {
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
