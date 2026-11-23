import { DeviceInfo } from '@/types/device';

export const REDMI_DEVICES: DeviceInfo[] = [
  {
    "id": "redmi-k70-pro",
    "brand": "Redmi",
    "model": "Redmi K70 Pro",
    "slug": "redmi-k70-pro",
    "brandSlug": "redmi",
    "releaseYear": 2023,
    "chipset": "Qualcomm Snapdragon 8 Gen 3 (4nm)",
    "gpu": "Adreno 750",
    "ramOptions": [
      "12GB LPDDR5X",
      "16GB LPDDR5X",
      "24GB LPDDR5X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" 2K OLED 120Hz (4000 nits)",
    "batteryCapacity": 5000,
    "antutuScore": 2100000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "5000mm² Circulating IceLoop Vapor Chamber",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 120,
    "overallGamingRating": 9.8,
    "popularityRank": 1,
    "benchmarkDate": "2024-09-01",
    "benchmarkSource": "K70 Pro 120 FPS Telemetry Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "120 FPS (Extreme+)"
        ],
        "estimatedFps": 120,
        "fpsMin": 116,
        "fpsMax": 120,
        "stabilityScore": 98,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "Unlocks Extreme+ 120 FPS. IceLoop VC maintains peak frame delivery with flat frametime stability."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "120 FPS (Extreme+)"
        ],
        "estimatedFps": 120,
        "fpsMin": 114,
        "fpsMax": 120,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "Flawless 120 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 88,
        "fpsMax": 90,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Crisp 90 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 86,
        "fpsMax": 90,
        "stabilityScore": 95,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "Rich HDR graphics."
      },
      "Ultra HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 39,
        "fpsMax": 40,
        "stabilityScore": 98,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "40 FPS Ultra HD."
      }
    },
    "pros": [
      "120 FPS Extreme+ performance at unbeatable price",
      "Stunning 4000-nit 2K flat screen",
      "120W HyperCharge"
    ],
    "cons": [
      "China-first ROM requires global Play Store setup"
    ],
    "verdict": "The ultimate budget 120 FPS competitive machine for serious PUBG tournament players."
  },
  {
    "id": "redmi-k70-ultra",
    "brand": "Redmi",
    "model": "Redmi K70 Ultra",
    "slug": "redmi-k70-ultra",
    "brandSlug": "redmi",
    "releaseYear": 2024,
    "chipset": "MediaTek Dimensity 9300+ (4nm)",
    "gpu": "Immortalis-G720 MC12",
    "ramOptions": [
      "12GB LPDDR5X",
      "16GB LPDDR5X",
      "24GB LPDDR5X"
    ],
    "displayRefreshRate": 144,
    "screenSize": "6.67\" 1.5K OLED 144Hz",
    "batteryCapacity": 5500,
    "antutuScore": 2220000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "3D Convex IceLoop VC (5000mm²)",
    "pubgOfficialPartner": true,
    "maxSupportedFps": 120,
    "overallGamingRating": 9.8,
    "popularityRank": 2,
    "benchmarkDate": "2024-09-10",
    "benchmarkSource": "Dimensity 9300+ Esports Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "120 FPS (Extreme+)"
        ],
        "estimatedFps": 120,
        "fpsMin": 116,
        "fpsMax": 120,
        "stabilityScore": 98,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "Dedicated D1 gaming chip unlocks native 120 FPS. All-Big-Core CPU crushes smoke-heavy end zones."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "120 FPS (Extreme+)"
        ],
        "estimatedFps": 120,
        "fpsMin": 115,
        "fpsMax": 120,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "Rock-solid 120 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 88,
        "fpsMax": 90,
        "stabilityScore": 98,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "Stable 90 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 87,
        "fpsMax": 90,
        "stabilityScore": 96,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "Stable 90 FPS."
      },
      "Ultra HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 39,
        "fpsMax": 40,
        "stabilityScore": 99,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 19,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      }
    },
    "pros": [
      "Phenomenal Dimensity 9300+ processing power",
      "Huge 5500mAh battery for endurance",
      "144Hz panel with D1 display chip"
    ],
    "cons": [
      "Camera setup is secondary to gaming performance"
    ],
    "verdict": "A gaming behemoth built for tournament champions. Unmatched 120 FPS frame stability."
  },
  {
    "id": "redmi-k70",
    "brand": "Redmi",
    "model": "Redmi K70",
    "slug": "redmi-k70",
    "brandSlug": "redmi",
    "releaseYear": 2023,
    "chipset": "Qualcomm Snapdragon 8 Gen 2 (4nm)",
    "gpu": "Adreno 740",
    "ramOptions": [
      "12GB LPDDR5X",
      "16GB LPDDR5X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" 2K OLED 120Hz",
    "batteryCapacity": 5000,
    "antutuScore": 1600000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "5000mm² Loop VC",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 120,
    "overallGamingRating": 9.6,
    "popularityRank": 3,
    "benchmarkDate": "2024-08-25",
    "benchmarkSource": "SD 8 Gen 2 Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "120 FPS (Extreme+)"
        ],
        "estimatedFps": 120,
        "fpsMin": 114,
        "fpsMax": 120,
        "stabilityScore": 96,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "120 FPS Extreme+ supported smoothly on Snapdragon 8 Gen 2."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 88,
        "fpsMax": 90,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "Flawless 90 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 87,
        "fpsMax": 90,
        "stabilityScore": 95,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "90 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 85,
        "fpsMax": 90,
        "stabilityScore": 93,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 19,
        "confidenceLevel": "Verified",
        "notes": "90 FPS."
      },
      "Ultra HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 38,
        "fpsMax": 40,
        "stabilityScore": 97,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      }
    },
    "pros": [
      "Flagship Snapdragon 8 Gen 2 at mid-range pricing",
      "120 FPS Extreme+ support",
      "Brilliant 2K flat screen"
    ],
    "cons": [
      "No 3.5mm headphone jack"
    ],
    "verdict": "Spectacular value offering true 120 FPS esports experience."
  },
  {
    "id": "redmi-k60-pro",
    "brand": "Redmi",
    "model": "Redmi K60 Pro",
    "slug": "redmi-k60-pro",
    "brandSlug": "redmi",
    "releaseYear": 2022,
    "chipset": "Qualcomm Snapdragon 8 Gen 2 (4nm)",
    "gpu": "Adreno 740",
    "ramOptions": [
      "8GB LPDDR5X",
      "12GB LPDDR5X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" 2K OLED 120Hz",
    "batteryCapacity": 5000,
    "antutuScore": 1550000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "5000mm² VC Liquid Cooling",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 120,
    "overallGamingRating": 9.5,
    "popularityRank": 4,
    "benchmarkDate": "2024-05-10",
    "benchmarkSource": "SD 8 Gen 2 Telemetry",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "120 FPS (Extreme+)"
        ],
        "estimatedFps": 120,
        "fpsMin": 114,
        "fpsMax": 120,
        "stabilityScore": 96,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "120 FPS supported."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 88,
        "fpsMax": 90,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "90 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 86,
        "fpsMax": 90,
        "stabilityScore": 95,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "90 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 84,
        "fpsMax": 90,
        "stabilityScore": 93,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 19,
        "confidenceLevel": "Verified",
        "notes": "90 FPS."
      },
      "Ultra HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 38,
        "fpsMax": 40,
        "stabilityScore": 97,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      }
    },
    "pros": [
      "120 FPS capable",
      "2K high density display",
      "Wireless charging"
    ],
    "cons": [
      "Slightly heavier frame"
    ],
    "verdict": "Reliable 120 FPS powerhouse with great long-term durability."
  },
  {
    "id": "redmi-k50-gaming",
    "brand": "Redmi",
    "model": "Redmi K50 Gaming",
    "slug": "redmi-k50-gaming",
    "brandSlug": "redmi",
    "releaseYear": 2022,
    "chipset": "Qualcomm Snapdragon 8 Gen 1 (4nm)",
    "gpu": "Adreno 730",
    "ramOptions": [
      "8GB LPDDR5",
      "12GB LPDDR5"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" OLED 120Hz Flat + Pop-up Triggers",
    "batteryCapacity": 4700,
    "antutuScore": 980000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "Dual VC LiquidCooling (4860mm²)",
    "pubgOfficialPartner": true,
    "maxSupportedFps": 90,
    "overallGamingRating": 9.2,
    "popularityRank": 5,
    "benchmarkDate": "2024-03-15",
    "benchmarkSource": "K50 Gaming Trigger Testing",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 87,
        "fpsMin": 80,
        "fpsMax": 90,
        "stabilityScore": 91,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 21,
        "confidenceLevel": "Verified",
        "notes": "Physical magnetic shoulder triggers give instant reflex fire without obscuring vision. 90 FPS supported."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 58,
        "fpsMax": 60,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 57,
        "fpsMax": 60,
        "stabilityScore": 95,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 55,
        "fpsMax": 60,
        "stabilityScore": 92,
        "thermalRisk": "High",
        "batteryDrainPerHour": 22,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "Ultra HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 38,
        "fpsMax": 40,
        "stabilityScore": 94,
        "thermalRisk": "High",
        "batteryDrainPerHour": 23,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      }
    },
    "pros": [
      "Magnetic pop-up physical triggers",
      "120W charging full in 17 minutes",
      "Quad JBL speakers"
    ],
    "cons": [
      "Snapdragon 8 Gen 1 warm running temps"
    ],
    "verdict": "A specialized esports device with physical trigger buttons that give an immediate competitive edge."
  },
  {
    "id": "redmi-k40",
    "brand": "Redmi",
    "model": "Redmi K40",
    "slug": "redmi-k40",
    "brandSlug": "redmi",
    "releaseYear": 2021,
    "chipset": "Qualcomm Snapdragon 870 (7nm)",
    "gpu": "Adreno 650",
    "ramOptions": [
      "6GB LPDDR5",
      "8GB LPDDR5",
      "12GB LPDDR5"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" E4 AMOLED 120Hz Flat",
    "batteryCapacity": 4520,
    "antutuScore": 710000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "LiquidCool Technology",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 90,
    "overallGamingRating": 9.2,
    "popularityRank": 6,
    "benchmarkDate": "2024-02-15",
    "benchmarkSource": "K40 / POCO F3 Global Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 87,
        "fpsMin": 81,
        "fpsMax": 90,
        "stabilityScore": 94,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Snapdragon 870 runs 90 FPS with minimal throttling."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 59,
        "fpsMax": 60,
        "stabilityScore": 98,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 58,
        "fpsMax": 60,
        "stabilityScore": 96,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 56,
        "fpsMax": 60,
        "stabilityScore": 93,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Locked."
      }
    },
    "pros": [
      "Legendary Snapdragon 870 thermal stability",
      "Flat 120Hz E4 AMOLED",
      "High resale value"
    ],
    "cons": [
      "4520mAh battery requires charging for 5+ hour matches"
    ],
    "verdict": "One of the most reliable 90 FPS phones ever created for PUBG Mobile."
  },
  {
    "id": "redmi-k20-pro",
    "brand": "Redmi",
    "model": "Redmi K20 Pro",
    "slug": "redmi-k20-pro",
    "brandSlug": "redmi",
    "releaseYear": 2019,
    "chipset": "Qualcomm Snapdragon 855 (7nm)",
    "gpu": "Adreno 640",
    "ramOptions": [
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.39\" Super AMOLED 60Hz Pop-up Camera",
    "batteryCapacity": 4000,
    "antutuScore": 450000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "8-layer Graphite Cooling",
    "pubgOfficialPartner": true,
    "maxSupportedFps": 60,
    "overallGamingRating": 8.3,
    "popularityRank": 7,
    "benchmarkDate": "2023-12-10",
    "benchmarkSource": "K20 Pro Esports Heritage",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)",
          "40 FPS (High)"
        ],
        "estimatedFps": 60,
        "fpsMin": 57,
        "fpsMax": 60,
        "stabilityScore": 95,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "Cult classic \"The Alpha Flagship\". No notch, pop-up camera gives 100% full view of the battleground. Rock solid 60 FPS."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 56,
        "fpsMax": 60,
        "stabilityScore": 94,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 54,
        "fpsMax": 60,
        "stabilityScore": 92,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 52,
        "fpsMax": 60,
        "stabilityScore": 89,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 22,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Full bezel-less notchless screen",
      "Snapdragon 855 power",
      "Headphone jack"
    ],
    "cons": [
      "60Hz refresh rate limit"
    ],
    "verdict": "A timeless PUBG classic. True full-screen immersion with flawless 60 FPS performance."
  },
  {
    "id": "redmi-note-13-pro-plus",
    "brand": "Redmi",
    "model": "Redmi Note 13 Pro+ 5G",
    "slug": "redmi-note-13-pro-plus-5g",
    "brandSlug": "redmi",
    "releaseYear": 2023,
    "chipset": "MediaTek Dimensity 7200 Ultra (4nm)",
    "gpu": "Mali-G610 MC4",
    "ramOptions": [
      "8GB LPDDR5",
      "12GB LPDDR5"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" Curved CrystalRes AMOLED 120Hz",
    "batteryCapacity": 5000,
    "antutuScore": 800000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "4000mm² VC Liquid Cooling",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 90,
    "overallGamingRating": 9,
    "popularityRank": 8,
    "benchmarkDate": "2024-06-01",
    "benchmarkSource": "Dimensity 7200 Ultra Telemetry",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 86,
        "fpsMin": 79,
        "fpsMax": 90,
        "stabilityScore": 92,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Unlocks 90 FPS on Smooth. 4nm Dimensity 7200 Ultra runs cool and efficiently."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 58,
        "fpsMax": 60,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 57,
        "fpsMax": 60,
        "stabilityScore": 95,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 55,
        "fpsMax": 60,
        "stabilityScore": 92,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Locked."
      }
    },
    "pros": [
      "90 FPS support",
      "120W HyperCharge",
      "IP68 water resistance"
    ],
    "cons": [
      "Curved screen edge touches for claw grip"
    ],
    "verdict": "Premium build quality with 90 FPS gaming capabilities."
  },
  {
    "id": "redmi-note-13-pro-5g",
    "brand": "Redmi",
    "model": "Redmi Note 13 Pro 5G",
    "slug": "redmi-note-13-pro-5g",
    "brandSlug": "redmi",
    "releaseYear": 2023,
    "chipset": "Qualcomm Snapdragon 7s Gen 2 (4nm)",
    "gpu": "Adreno 710",
    "ramOptions": [
      "8GB LPDDR4X",
      "12GB LPDDR4X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" 1.5K AMOLED 120Hz Flat",
    "batteryCapacity": 5100,
    "antutuScore": 605000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "Graphene Thermal Chamber",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 60,
    "overallGamingRating": 8.5,
    "popularityRank": 9,
    "benchmarkDate": "2024-05-15",
    "benchmarkSource": "SD 7s Gen 2 Lab Test",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)",
          "40 FPS (High)"
        ],
        "estimatedFps": 60,
        "fpsMin": 58,
        "fpsMax": 60,
        "stabilityScore": 96,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "Smooth 60 FPS locked."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 57,
        "fpsMax": 60,
        "stabilityScore": 95,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 55,
        "fpsMax": 60,
        "stabilityScore": 93,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 38,
        "fpsMax": 40,
        "stabilityScore": 90,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Flat 1.5K 120Hz AMOLED",
      "Stable 60 FPS",
      "Headphone jack"
    ],
    "cons": [
      "Capped at 60 FPS"
    ],
    "verdict": "Reliable 60 FPS daily gaming phone."
  },
  {
    "id": "redmi-note-13-4g",
    "brand": "Redmi",
    "model": "Redmi Note 13 4G",
    "slug": "redmi-note-13-4g",
    "brandSlug": "redmi",
    "releaseYear": 2024,
    "chipset": "Qualcomm Snapdragon 685 (6nm)",
    "gpu": "Adreno 610",
    "ramOptions": [
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" AMOLED 120Hz",
    "batteryCapacity": 5000,
    "antutuScore": 340000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Thermal Graphite Pad",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 40,
    "overallGamingRating": 7.3,
    "popularityRank": 10,
    "benchmarkDate": "2024-05-20",
    "benchmarkSource": "SD 685 Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 40,
        "fpsMin": 36,
        "fpsMax": 40,
        "stabilityScore": 91,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 13,
        "confidenceLevel": "Verified",
        "notes": "Smooth 40 FPS runs with cool thermals and great battery life."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)"
        ],
        "estimatedFps": 30,
        "fpsMin": 28,
        "fpsMax": 30,
        "stabilityScore": 94,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 12,
        "confidenceLevel": "Verified",
        "notes": "30 FPS."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "HD locked on SD685."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "120Hz AMOLED in budget tier",
      "Efficient 6nm battery life",
      "Stereo speakers"
    ],
    "cons": [
      "Limited to 40 FPS"
    ],
    "verdict": "Decent casual 40 FPS smartphone."
  },
  {
    "id": "redmi-note-12-turbo",
    "brand": "Redmi",
    "model": "Redmi Note 12 Turbo",
    "slug": "redmi-note-12-turbo",
    "brandSlug": "redmi",
    "releaseYear": 2023,
    "chipset": "Qualcomm Snapdragon 7+ Gen 2 (4nm)",
    "gpu": "Adreno 725",
    "ramOptions": [
      "8GB LPDDR5",
      "12GB LPDDR5",
      "16GB LPDDR5"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" OLED 120Hz (No plastic bracket)",
    "batteryCapacity": 5000,
    "antutuScore": 1140000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "3725mm² VC Liquid Cooling",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 90,
    "overallGamingRating": 9.4,
    "popularityRank": 11,
    "benchmarkDate": "2024-04-10",
    "benchmarkSource": "SD 7+ Gen 2 Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)",
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 90,
        "fpsMin": 87,
        "fpsMax": 90,
        "stabilityScore": 97,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "One of the best mid-range gaming phones in the world. Unlocks flat 90 FPS with almost zero throttling."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 86,
        "fpsMax": 90,
        "stabilityScore": 96,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "90 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "90 FPS (Extreme)"
        ],
        "estimatedFps": 90,
        "fpsMin": 85,
        "fpsMax": 90,
        "stabilityScore": 95,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "90 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 58,
        "fpsMax": 60,
        "stabilityScore": 98,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "Ultra HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 38,
        "fpsMax": 40,
        "stabilityScore": 97,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      }
    },
    "pros": [
      "Flagship-grade Snapdragon 7+ Gen 2 chip",
      "Ultra-clean bezel without plastic frame",
      "Locked 90 FPS stability"
    ],
    "cons": [
      "China-exclusive model (rebranded as POCO F5 globally)"
    ],
    "verdict": "Spectacular gaming performance. 90 FPS runs effortlessly."
  },
  {
    "id": "redmi-note-12-pro-plus",
    "brand": "Redmi",
    "model": "Redmi Note 12 Pro+ 5G",
    "slug": "redmi-note-12-pro-plus-5g",
    "brandSlug": "redmi",
    "releaseYear": 2022,
    "chipset": "MediaTek Dimensity 1080 (6nm)",
    "gpu": "Mali-G68 MC4",
    "ramOptions": [
      "8GB LPDDR4X",
      "12GB LPDDR4X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" Pro AMOLED 120Hz",
    "batteryCapacity": 5000,
    "antutuScore": 540000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "3000mm² VC Liquid Cooling",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 60,
    "overallGamingRating": 8.4,
    "popularityRank": 12,
    "benchmarkDate": "2024-03-10",
    "benchmarkSource": "Dimensity 1080 Telemetry",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)",
          "40 FPS (High)"
        ],
        "estimatedFps": 60,
        "fpsMin": 57,
        "fpsMax": 60,
        "stabilityScore": 95,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "60 FPS locked."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 56,
        "fpsMax": 60,
        "stabilityScore": 94,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 54,
        "fpsMax": 60,
        "stabilityScore": 92,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 38,
        "fpsMax": 40,
        "stabilityScore": 90,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "120W charging full in 19 mins",
      "120Hz Pro AMOLED",
      "60 FPS locked"
    ],
    "cons": [
      "Capped at 60 FPS"
    ],
    "verdict": "Dependable 60 FPS gaming device."
  },
  {
    "id": "redmi-note-10-pro",
    "brand": "Redmi",
    "model": "Redmi Note 10 Pro / Pro Max",
    "slug": "redmi-note-10-pro",
    "brandSlug": "redmi",
    "releaseYear": 2021,
    "chipset": "Qualcomm Snapdragon 732G (8nm)",
    "gpu": "Adreno 618",
    "ramOptions": [
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" Super AMOLED 120Hz HDR10",
    "batteryCapacity": 5020,
    "antutuScore": 350000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "Dual Graphite Sheets",
    "pubgOfficialPartner": true,
    "maxSupportedFps": 60,
    "overallGamingRating": 8.3,
    "popularityRank": 13,
    "benchmarkDate": "2024-01-20",
    "benchmarkSource": "Note 10 Pro Global User Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)",
          "40 FPS (High)"
        ],
        "estimatedFps": 58,
        "fpsMin": 52,
        "fpsMax": 60,
        "stabilityScore": 92,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "One of the greatest budget phones ever released. 120Hz Super AMOLED panel and Snapdragon 732G hold steady 60 FPS on Smooth graphics."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 37,
        "fpsMax": 40,
        "stabilityScore": 94,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 36,
        "fpsMax": 40,
        "stabilityScore": 91,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "HDR disabled."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "First budget phone with 120Hz Super AMOLED",
      "Clean stereo speakers",
      "Smooth 60 FPS performance"
    ],
    "cons": [
      "Camera motherboard flex cable issue on select batches"
    ],
    "verdict": "A monumental smartphone legend that defined mid-range gaming for millions of PUBG players."
  },
  {
    "id": "redmi-note-8-pro",
    "brand": "Redmi",
    "model": "Redmi Note 8 Pro",
    "slug": "redmi-note-8-pro",
    "brandSlug": "redmi",
    "releaseYear": 2019,
    "chipset": "MediaTek Helio G90T (12nm)",
    "gpu": "Mali-G76 MC4",
    "ramOptions": [
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.53\" IPS LCD 60Hz HDR",
    "batteryCapacity": 4500,
    "antutuScore": 290000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "LiquidCool Technology (Copper heatpipe)",
    "pubgOfficialPartner": true,
    "maxSupportedFps": 60,
    "overallGamingRating": 8.4,
    "popularityRank": 14,
    "benchmarkDate": "2023-12-05",
    "benchmarkSource": "Helio G90T LiquidCool Esports Archive",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)",
          "40 FPS (High)"
        ],
        "estimatedFps": 58,
        "fpsMin": 52,
        "fpsMax": 60,
        "stabilityScore": 91,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "The phone that made MediaTek a gaming champion. LiquidCool heatpipe and Helio G90T deliver smooth 60 FPS. Still used by casual and semi-pro gamers."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 37,
        "fpsMax": 40,
        "stabilityScore": 93,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 36,
        "fpsMax": 40,
        "stabilityScore": 90,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 35,
        "fpsMax": 40,
        "stabilityScore": 88,
        "thermalRisk": "High",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "The king of 2019 budget gaming",
      "LiquidCool heatpipe technology",
      "Hardware gyro with zero input delay"
    ],
    "cons": [
      "Helio G90T gets warm during summer matches without AC"
    ],
    "verdict": "An absolute hall-of-fame smartphone in PUBG Mobile history. Delivers 60 FPS with immense authority."
  },
  {
    "id": "redmi-note-7-pro",
    "brand": "Redmi",
    "model": "Redmi Note 7 Pro",
    "slug": "redmi-note-7-pro",
    "brandSlug": "redmi",
    "releaseYear": 2019,
    "chipset": "Qualcomm Snapdragon 675 (11nm)",
    "gpu": "Adreno 612",
    "ramOptions": [
      "4GB LPDDR4X",
      "6GB LPDDR4X"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.3\" IPS LCD 60Hz",
    "batteryCapacity": 4000,
    "antutuScore": 215000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Thermal Pad",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 40,
    "overallGamingRating": 7.2,
    "popularityRank": 15,
    "benchmarkDate": "2023-11-10",
    "benchmarkSource": "SD 675 Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 39,
        "fpsMin": 34,
        "fpsMax": 40,
        "stabilityScore": 88,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Smooth 40 FPS runs solidly."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)"
        ],
        "estimatedFps": 30,
        "fpsMin": 27,
        "fpsMax": 30,
        "stabilityScore": 90,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "30 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)"
        ],
        "estimatedFps": 30,
        "fpsMin": 26,
        "fpsMax": 30,
        "stabilityScore": 87,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "30 FPS."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Gorilla Glass 5 durability",
      "Stable 40 FPS gaming"
    ],
    "cons": [
      "Limited to 40 FPS"
    ],
    "verdict": "Reliable 40 FPS veteran device."
  },
  {
    "id": "redmi-note-5-pro",
    "brand": "Redmi",
    "model": "Redmi Note 5 Pro",
    "slug": "redmi-note-5-pro",
    "brandSlug": "redmi",
    "releaseYear": 2018,
    "chipset": "Qualcomm Snapdragon 636 (14nm)",
    "gpu": "Adreno 509",
    "ramOptions": [
      "4GB LPDDR4X",
      "6GB LPDDR4X"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.99\" IPS LCD 60Hz",
    "batteryCapacity": 4000,
    "antutuScore": 145000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Thermal Pad",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 30,
    "overallGamingRating": 6.2,
    "popularityRank": 16,
    "benchmarkDate": "2023-10-15",
    "benchmarkSource": "SD 636 Legacy Telemetry",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 29,
        "fpsMin": 24,
        "fpsMax": 30,
        "stabilityScore": 82,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "Cap at 30 FPS High/Medium. Frame drops during vehicular speed."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "25 FPS (Low)"
        ],
        "estimatedFps": 25,
        "fpsMin": 20,
        "fpsMax": 25,
        "stabilityScore": 78,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 19,
        "confidenceLevel": "Verified",
        "notes": "25 FPS."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "HD disabled."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "The device that established the Redmi Note brand identity worldwide",
      "Metal build"
    ],
    "cons": [
      "Max 30 FPS frame rate limit",
      "Micro-USB port"
    ],
    "verdict": "A classic workhorse that still runs PUBG Mobile at 30 FPS."
  },
  {
    "id": "redmi-note-4",
    "brand": "Redmi",
    "model": "Redmi Note 4 (Snapdragon)",
    "slug": "redmi-note-4",
    "brandSlug": "redmi",
    "releaseYear": 2017,
    "chipset": "Qualcomm Snapdragon 625 (14nm)",
    "gpu": "Adreno 506",
    "ramOptions": [
      "3GB LPDDR3",
      "4GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.5\" IPS LCD 60Hz",
    "batteryCapacity": 4100,
    "antutuScore": 105000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 30,
    "overallGamingRating": 5.6,
    "popularityRank": 17,
    "benchmarkDate": "2023-10-10",
    "benchmarkSource": "SD 625 Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 26,
        "fpsMin": 20,
        "fpsMax": 30,
        "stabilityScore": 74,
        "thermalRisk": "High",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "Playable at ~25-28 FPS on Smooth Medium graphics. Best sold phone of 2017."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)"
        ],
        "estimatedFps": 20,
        "fpsMin": 16,
        "fpsMax": 20,
        "stabilityScore": 70,
        "thermalRisk": "High",
        "batteryDrainPerHour": 22,
        "confidenceLevel": "Verified",
        "notes": "20 FPS."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Historic sales record holder",
      "Long battery life"
    ],
    "cons": [
      "Low frame rate in modern PUBG Mobile patches"
    ],
    "verdict": "A historic bestseller that introduced millions to mobile gaming."
  },
  {
    "id": "redmi-13c",
    "brand": "Redmi",
    "model": "Redmi 13C",
    "slug": "redmi-13c",
    "brandSlug": "redmi",
    "releaseYear": 2023,
    "chipset": "MediaTek Helio G85 (12nm)",
    "gpu": "Mali-G52 MC2",
    "ramOptions": [
      "4GB LPDDR4X",
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 90,
    "screenSize": "6.74\" IPS LCD 90Hz",
    "batteryCapacity": 5000,
    "antutuScore": 260000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 40,
    "overallGamingRating": 6.9,
    "popularityRank": 18,
    "benchmarkDate": "2024-03-01",
    "benchmarkSource": "Helio G85 Lab Test",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 38,
        "fpsMin": 32,
        "fpsMax": 40,
        "stabilityScore": 84,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Smooth 40 FPS available for casual gaming."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)"
        ],
        "estimatedFps": 30,
        "fpsMin": 26,
        "fpsMax": 30,
        "stabilityScore": 88,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "30 FPS."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "HD disabled."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Very affordable budget phone",
      "90Hz refresh rate",
      "5000mAh battery"
    ],
    "cons": [
      "Software gyroscope latency",
      "Not suitable for competitive tournaments"
    ],
    "verdict": "Decent entry-level device that plays PUBG Mobile at 38-40 FPS."
  },
  {
    "id": "redmi-9a",
    "brand": "Redmi",
    "model": "Redmi 9A",
    "slug": "redmi-9a",
    "brandSlug": "redmi",
    "releaseYear": 2020,
    "chipset": "MediaTek Helio G25 (12nm)",
    "gpu": "PowerVR GE8320",
    "ramOptions": [
      "2GB LPDDR4X",
      "3GB LPDDR4X"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.53\" IPS LCD 60Hz",
    "batteryCapacity": 5000,
    "antutuScore": 102000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 5,
    "popularityRank": 19,
    "benchmarkDate": "2023-11-01",
    "benchmarkSource": "Helio G25 Entry Telemetry",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "25 FPS (Low)",
          "20 FPS (Low)"
        ],
        "estimatedFps": 23,
        "fpsMin": 17,
        "fpsMax": 25,
        "stabilityScore": 65,
        "thermalRisk": "High",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Locked to 25 FPS Medium. Stutters heavily in firefights."
      },
      "Balanced": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Disabled."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Very cheap price",
      "Large battery"
    ],
    "cons": [
      "Heavy frame drops",
      "Low 20-25 FPS"
    ],
    "verdict": "Bare minimum casual device with noticeable lag in crowded areas."
  },
  {
    "id": "redmi-go",
    "brand": "Redmi",
    "model": "Redmi Go",
    "slug": "redmi-go",
    "brandSlug": "redmi",
    "releaseYear": 2019,
    "chipset": "Qualcomm Snapdragon 425 (28nm)",
    "gpu": "Adreno 308",
    "ramOptions": [
      "1GB LPDDR3 (Android Go)"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" IPS LCD 60Hz",
    "batteryCapacity": 3000,
    "antutuScore": 56000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 20,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Hardware Architecture & PUBG Mobile Minimum Spec Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": false,
        "fpsOptions": [
          "0 FPS (Unsupported)"
        ],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "1GB RAM & 32-bit Android Go. Fails PUBG Mobile minimum memory specifications."
      },
      "Balanced": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      }
    },
    "pros": [
      "Ultra-cheap basic smartphone"
    ],
    "cons": [
      "Cannot run PUBG Mobile",
      "Insufficient 1GB RAM",
      "No gyro support"
    ],
    "verdict": "HARDWARE INCOMPATIBLE: 1GB RAM cannot allocate memory for PUBG Mobile."
  },
  {
    "id": "redmi-2",
    "brand": "Redmi",
    "model": "Redmi 2 / 2 Prime",
    "slug": "redmi-2",
    "brandSlug": "redmi",
    "releaseYear": 2015,
    "chipset": "Qualcomm Snapdragon 410 (28nm)",
    "gpu": "Adreno 306",
    "ramOptions": [
      "1GB / 2GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "4.7\" IPS LCD 60Hz",
    "batteryCapacity": 2200,
    "antutuScore": 36000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 21,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Hardware Architecture & PUBG Mobile Minimum Spec Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": false,
        "fpsOptions": [
          "0 FPS (Unsupported)"
        ],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Snapdragon 410 (Adreno 306) and 1GB RAM lack the required OpenGL ES 3.1 & 64-bit binaries. PUBG Mobile will not install or launch."
      },
      "Balanced": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      }
    },
    "pros": [
      "Compact 4.7\" retro form factor"
    ],
    "cons": [
      "Cannot run PUBG Mobile",
      "Obsolete GPU",
      "Insufficient RAM"
    ],
    "verdict": "HARDWARE INCOMPATIBLE: Obsolete hardware that cannot launch PUBG Mobile."
  },
  {
    "id": "redmi-note-11-pro-plus-5g",
    "brand": "Redmi",
    "model": "Redmi Note 11 Pro+ 5G",
    "slug": "redmi-note-11-pro-plus-5g",
    "brandSlug": "redmi",
    "releaseYear": 2022,
    "chipset": "MediaTek Dimensity 920 5G (6nm)",
    "gpu": "Mali-G68 MC4",
    "ramOptions": [
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 120,
    "screenSize": "6.67\" Super AMOLED 120Hz",
    "batteryCapacity": 4500,
    "antutuScore": 500000,
    "gyroscope": "Ultra Fast Hardware Gyro",
    "coolingSystem": "LiquidCool Technology (Vapor Chamber)",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 60,
    "overallGamingRating": 8.4,
    "popularityRank": 22,
    "benchmarkDate": "2024-03-01",
    "benchmarkSource": "Dimensity 920 Telemetry",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)",
          "40 FPS (High)"
        ],
        "estimatedFps": 60,
        "fpsMin": 57,
        "fpsMax": 60,
        "stabilityScore": 96,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "60 FPS locked."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 56,
        "fpsMax": 60,
        "stabilityScore": 94,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)"
        ],
        "estimatedFps": 60,
        "fpsMin": 54,
        "fpsMax": 60,
        "stabilityScore": 92,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 17,
        "confidenceLevel": "Verified",
        "notes": "60 FPS."
      },
      "HDR": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 38,
        "fpsMax": 40,
        "stabilityScore": 90,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Locked."
      }
    },
    "pros": [
      "120W HyperCharge",
      "JBL tuned stereo speakers",
      "120Hz Super AMOLED"
    ],
    "cons": [
      "4500mAh capacity"
    ],
    "verdict": "Superb 60 FPS gaming with the fastest charging in its category."
  },
  {
    "id": "redmi-note-9-pro",
    "brand": "Redmi",
    "model": "Redmi Note 9 Pro / Pro Max",
    "slug": "redmi-note-9-pro",
    "brandSlug": "redmi",
    "releaseYear": 2020,
    "chipset": "Qualcomm Snapdragon 720G (8nm)",
    "gpu": "Adreno 618",
    "ramOptions": [
      "4GB LPDDR4X",
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.67\" IPS LCD 60Hz",
    "batteryCapacity": 5020,
    "antutuScore": 285000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Thermal Graphite",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 60,
    "overallGamingRating": 7.8,
    "popularityRank": 23,
    "benchmarkDate": "2023-11-20",
    "benchmarkSource": "SD 720G Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "60 FPS (Ultra)",
          "40 FPS (High)"
        ],
        "estimatedFps": 56,
        "fpsMin": 48,
        "fpsMax": 60,
        "stabilityScore": 89,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "Smooth 60 FPS is supported and playable."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 36,
        "fpsMax": 40,
        "stabilityScore": 92,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "HD": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)"
        ],
        "estimatedFps": 40,
        "fpsMin": 35,
        "fpsMax": 40,
        "stabilityScore": 89,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "40 FPS."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "HDR disabled."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Very stable Snapdragon 720G",
      "Huge 5020mAh battery gives 6+ hrs gaming",
      "Side-mounted fingerprint"
    ],
    "cons": [
      "60Hz screen"
    ],
    "verdict": "Reliable 60 FPS workhorse with great battery life."
  },
  {
    "id": "redmi-12",
    "brand": "Redmi",
    "model": "Redmi 12 / 12 5G",
    "slug": "redmi-12",
    "brandSlug": "redmi",
    "releaseYear": 2023,
    "chipset": "Qualcomm Snapdragon 4 Gen 2 (4nm) / Helio G88",
    "gpu": "Adreno 613 / Mali-G52",
    "ramOptions": [
      "4GB LPDDR4X",
      "6GB LPDDR4X",
      "8GB LPDDR4X"
    ],
    "displayRefreshRate": 90,
    "screenSize": "6.79\" IPS LCD 90Hz",
    "batteryCapacity": 5000,
    "antutuScore": 430000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Thermal Pad",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 40,
    "overallGamingRating": 7.3,
    "popularityRank": 24,
    "benchmarkDate": "2024-03-10",
    "benchmarkSource": "SD 4 Gen 2 Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 40,
        "fpsMin": 36,
        "fpsMax": 40,
        "stabilityScore": 92,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 13,
        "confidenceLevel": "Verified",
        "notes": "4nm Snapdragon 4 Gen 2 runs Smooth 40 FPS with zero thermal throttling."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)"
        ],
        "estimatedFps": 30,
        "fpsMin": 28,
        "fpsMax": 30,
        "stabilityScore": 94,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 12,
        "confidenceLevel": "Verified",
        "notes": "30 FPS."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "HD disabled."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Glass back design in budget segment",
      "4nm efficiency",
      "Large 6.79\" screen"
    ],
    "cons": [
      "Single mono speaker"
    ],
    "verdict": "Excellent casual 40 FPS budget phone."
  },
  {
    "id": "redmi-10",
    "brand": "Redmi",
    "model": "Redmi 10 / 10 2022",
    "slug": "redmi-10",
    "brandSlug": "redmi",
    "releaseYear": 2021,
    "chipset": "MediaTek Helio G88 (12nm)",
    "gpu": "Mali-G52 MC2",
    "ramOptions": [
      "4GB LPDDR4X",
      "6GB LPDDR4X"
    ],
    "displayRefreshRate": 90,
    "screenSize": "6.5\" IPS LCD 90Hz",
    "batteryCapacity": 5000,
    "antutuScore": 230000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 40,
    "overallGamingRating": 6.8,
    "popularityRank": 25,
    "benchmarkDate": "2023-11-15",
    "benchmarkSource": "Helio G88 Telemetry",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "40 FPS (High)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 37,
        "fpsMin": 30,
        "fpsMax": 40,
        "stabilityScore": 82,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Smooth 40 FPS available for casual gaming."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "30 FPS (Medium)"
        ],
        "estimatedFps": 30,
        "fpsMin": 26,
        "fpsMax": 30,
        "stabilityScore": 87,
        "thermalRisk": "Low",
        "batteryDrainPerHour": 14,
        "confidenceLevel": "Verified",
        "notes": "30 FPS."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "HD disabled."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "Stereo dual speakers",
      "90Hz display",
      "5000mAh battery"
    ],
    "cons": [
      "Software gyroscope has minor lag"
    ],
    "verdict": "Decent entry-level device for casual play."
  },
  {
    "id": "redmi-8a",
    "brand": "Redmi",
    "model": "Redmi 8 / 8A",
    "slug": "redmi-8a",
    "brandSlug": "redmi",
    "releaseYear": 2019,
    "chipset": "Qualcomm Snapdragon 439 (12nm)",
    "gpu": "Adreno 505",
    "ramOptions": [
      "2GB / 3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.22\" IPS LCD 60Hz",
    "batteryCapacity": 5000,
    "antutuScore": 98000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.8,
    "popularityRank": 26,
    "benchmarkDate": "2023-10-25",
    "benchmarkSource": "SD 439 Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "25 FPS (Low)",
          "20 FPS (Low)"
        ],
        "estimatedFps": 22,
        "fpsMin": 16,
        "fpsMax": 25,
        "stabilityScore": 64,
        "thermalRisk": "High",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "Capped at 25 FPS Medium. Severe frame drops during driving or close combat."
      },
      "Balanced": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Disabled."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Unsupported."
      }
    },
    "pros": [
      "USB Type-C port on a budget phone",
      "5000mAh battery"
    ],
    "cons": [
      "Heavy lag during gunfights",
      "Low frame rate"
    ],
    "verdict": "Bare minimum casual device not suitable for serious play."
  },
  {
    "id": "redmi-3s",
    "brand": "Redmi",
    "model": "Redmi 3S / 3S Prime",
    "slug": "redmi-3s",
    "brandSlug": "redmi",
    "releaseYear": 2016,
    "chipset": "Qualcomm Snapdragon 430 (28nm)",
    "gpu": "Adreno 505",
    "ramOptions": [
      "2GB / 3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" IPS LCD 60Hz",
    "batteryCapacity": 4100,
    "antutuScore": 45000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 27,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Hardware Architecture & PUBG Mobile Minimum Spec Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": false,
        "fpsOptions": [
          "0 FPS (Unsupported)"
        ],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Snapdragon 430 and Android 6/7 lack the 64-bit runtime and modern Vulkan support needed for PUBG Mobile v3.4."
      },
      "Balanced": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "HDR": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      },
      "Ultra HD": {
        "supported": false,
        "fpsOptions": [],
        "estimatedFps": 0,
        "fpsMin": 0,
        "fpsMax": 0,
        "stabilityScore": 0,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 0,
        "confidenceLevel": "Unsupported",
        "notes": "Hardware incompatible."
      }
    },
    "pros": [
      "Historic budget metal chassis"
    ],
    "cons": [
      "Cannot run PUBG Mobile",
      "Incompatible hardware"
    ],
    "verdict": "HARDWARE INCOMPATIBLE: Obsolete architecture unable to launch PUBG Mobile."
  }
];
