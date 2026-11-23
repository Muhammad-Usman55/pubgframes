import { DeviceInfo } from '@/types/device';

export const QMOBILE_DEVICES: DeviceInfo[] = [
  {
    "id": "qmobile-noir-e8",
    "brand": "QMobile",
    "model": "QMobile Noir E8",
    "slug": "qmobile-noir-e8",
    "brandSlug": "qmobile",
    "releaseYear": 2015,
    "chipset": "MediaTek Helio X10 (MT6795) 2.0 GHz Octa-Core",
    "gpu": "PowerVR G6200",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.0\" 2K WQHD Super AMOLED (2560x1440)",
    "batteryCapacity": 3520,
    "antutuScore": 68000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive Thermal Shield",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 30,
    "overallGamingRating": 5.5,
    "popularityRank": 1,
    "benchmarkDate": "2024-02-15",
    "benchmarkSource": "Pakistani Community & Hardware Testing Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 28,
        "fpsMin": 20,
        "fpsMax": 30,
        "stabilityScore": 70,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 26,
        "confidenceLevel": "Verified",
        "notes": "Historical flagship of QMobile. 2K Super AMOLED screen pushes intense resolution on the Helio X10. Plays Smooth Medium at 25-28 FPS with high heat dissipation."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 22,
        "fpsMin": 16,
        "fpsMax": 25,
        "stabilityScore": 65,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 28,
        "confidenceLevel": "Verified",
        "notes": "Heavy frame drops down to 16 FPS in Georgopol and Pochinki."
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
        "notes": "HD setting not supported on Helio X10."
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
      "Historic Pakistani super-flagship with 2K AMOLED screen",
      "3GB RAM and 24MP 4K camera",
      "Hardware gyroscope included"
    ],
    "cons": [
      "Helio X10 overheats severely after 20 minutes",
      "2K resolution is too heavy for modern PUBG 3D engine",
      "Capped at 30 FPS"
    ],
    "verdict": "Legendary Pakistani flagship. Plays casually at 25-28 FPS on Smooth, but thermal throttling causes noticeable frame drops."
  },
  {
    "id": "qmobile-noir-z14",
    "brand": "QMobile",
    "model": "QMobile Noir Z14",
    "slug": "qmobile-noir-z14",
    "brandSlug": "qmobile",
    "releaseYear": 2016,
    "chipset": "MediaTek Helio P10 (MT6755) 1.8 GHz Octa-Core",
    "gpu": "Mali-T860 MP2",
    "ramOptions": [
      "4GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.5\" FHD IPS 2.5D Curved Glass",
    "batteryCapacity": 3130,
    "antutuScore": 58000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive Metal Unibody Dissipation",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 30,
    "overallGamingRating": 5.6,
    "popularityRank": 2,
    "benchmarkDate": "2024-02-10",
    "benchmarkSource": "QMobile Gaming Archives & User Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "25 FPS (Low)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 28,
        "fpsMin": 22,
        "fpsMax": 30,
        "stabilityScore": 73,
        "thermalRisk": "High",
        "batteryDrainPerHour": 22,
        "confidenceLevel": "Verified",
        "notes": "4GB RAM provides sufficient buffer for PUBG Mobile textures. Delivers 25-30 FPS on Smooth Medium."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 24,
        "fpsMin": 18,
        "fpsMax": 25,
        "stabilityScore": 68,
        "thermalRisk": "High",
        "batteryDrainPerHour": 24,
        "confidenceLevel": "Verified",
        "notes": "Low frame rate at 20-25 FPS."
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
      "Premium full aircraft metal unibody",
      "4GB RAM prevents out-of-memory crashes",
      "USB Type-C reversible port"
    ],
    "cons": [
      "Helio P10 processor struggles in close-quarter combat",
      "Max 30 FPS"
    ],
    "verdict": "One of the best built QMobile phones in history. Playable at 25-30 FPS on lowest graphics settings."
  },
  {
    "id": "qmobile-noir-z12-pro",
    "brand": "QMobile",
    "model": "QMobile Noir Z12 Pro",
    "slug": "qmobile-noir-z12-pro",
    "brandSlug": "qmobile",
    "releaseYear": 2016,
    "chipset": "MediaTek MT6753 1.3 GHz Octa-Core",
    "gpu": "Mali-T720 MP3",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.5\" FHD IPS Oncell Display",
    "batteryCapacity": 3150,
    "antutuScore": 42000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 5,
    "popularityRank": 3,
    "benchmarkDate": "2024-02-05",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 24,
        "fpsMin": 18,
        "fpsMax": 25,
        "stabilityScore": 68,
        "thermalRisk": "High",
        "batteryDrainPerHour": 22,
        "confidenceLevel": "Verified",
        "notes": "MT6753 achieves 20-25 FPS on Smooth Low. Noticeable rendering stutter when scoping in with 4x/6x scopes."
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
        "notes": "Setting locked."
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
      "Front fingerprint sensor",
      "Sleek curved design",
      "3GB RAM"
    ],
    "cons": [
      "Mali-T720 GPU struggles with modern particle effects",
      "Capped at 25 FPS"
    ],
    "verdict": "Very basic 20-25 FPS casual gameplay."
  },
  {
    "id": "qmobile-noir-z12",
    "brand": "QMobile",
    "model": "QMobile Noir Z12",
    "slug": "qmobile-noir-z12",
    "brandSlug": "qmobile",
    "releaseYear": 2016,
    "chipset": "MediaTek MT6753 1.3 GHz Octa-Core",
    "gpu": "Mali-T720 MP3",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.3\" HD AMOLED Display",
    "batteryCapacity": 3150,
    "antutuScore": 40000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 5.1,
    "popularityRank": 4,
    "benchmarkDate": "2024-02-01",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 25,
        "fpsMin": 19,
        "fpsMax": 25,
        "stabilityScore": 70,
        "thermalRisk": "High",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "Lower 720p AMOLED screen gives slightly better frame rate than the Pro model, maintaining near 25 FPS on Smooth Low."
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
        "notes": "Unsupported."
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
      "Vibrant AMOLED display",
      "Compact 5.3-inch size",
      "3GB RAM"
    ],
    "cons": [
      "Low 25 FPS ceiling",
      "Drops frames during smoke grenades"
    ],
    "verdict": "One of the most popular QMobile phones of its era, running Smooth Low at 22-25 FPS."
  },
  {
    "id": "qmobile-noir-z10",
    "brand": "QMobile",
    "model": "QMobile Noir Z10",
    "slug": "qmobile-noir-z10",
    "brandSlug": "qmobile",
    "releaseYear": 2015,
    "chipset": "MediaTek MT6753 1.3 GHz Octa-Core",
    "gpu": "Mali-T720",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.2\" FHD IPS 2.5D Glass",
    "batteryCapacity": 2900,
    "antutuScore": 39000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.9,
    "popularityRank": 5,
    "benchmarkDate": "2024-01-20",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 23,
        "fpsMin": 17,
        "fpsMax": 25,
        "stabilityScore": 66,
        "thermalRisk": "High",
        "batteryDrainPerHour": 24,
        "confidenceLevel": "Verified",
        "notes": "Smooth Low achieves 20-25 FPS. FHD display causes noticeable GPU strain during intense gunfights."
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
        "notes": "Unsupported."
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
      "Sharp 1080p display",
      "3GB RAM prevents immediate crashes"
    ],
    "cons": [
      "Battery life drains rapidly",
      "20-24 FPS in team fights"
    ],
    "verdict": "Borderline playable at 20-24 FPS."
  },
  {
    "id": "qmobile-noir-infinity",
    "brand": "QMobile",
    "model": "QMobile Noir Infinity",
    "slug": "qmobile-noir-infinity",
    "brandSlug": "qmobile",
    "releaseYear": 2018,
    "chipset": "MediaTek MT6737 1.3 GHz Quad-Core",
    "gpu": "Mali-T720 MP1",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.7\" HD+ 18:9 FullView Display",
    "batteryCapacity": 2900,
    "antutuScore": 36000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.6,
    "popularityRank": 6,
    "benchmarkDate": "2024-01-15",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 22,
        "fpsMin": 16,
        "fpsMax": 25,
        "stabilityScore": 62,
        "thermalRisk": "High",
        "batteryDrainPerHour": 22,
        "confidenceLevel": "Verified",
        "notes": "Quad-core MT6737 runs at 18-22 FPS on Smooth Low. Frequent frame drops when rendering enemy squads."
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
        "notes": "Unsupported."
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
      "Modern 18:9 aspect ratio",
      "3GB RAM"
    ],
    "cons": [
      "Weak Quad-core processor",
      "Software gyro with lag"
    ],
    "verdict": "Challenging gameplay experience with heavy frame stutter."
  },
  {
    "id": "qmobile-noir-infinity-prime",
    "brand": "QMobile",
    "model": "QMobile Noir Infinity Prime",
    "slug": "qmobile-noir-infinity-prime",
    "brandSlug": "qmobile",
    "releaseYear": 2018,
    "chipset": "MediaTek MT6737T 1.5 GHz Quad-Core",
    "gpu": "Mali-T720 MP2",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.7\" HD+ 18:9 FullView IPS",
    "batteryCapacity": 3000,
    "antutuScore": 38000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.7,
    "popularityRank": 7,
    "benchmarkDate": "2024-01-15",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 23,
        "fpsMin": 17,
        "fpsMax": 25,
        "stabilityScore": 64,
        "thermalRisk": "High",
        "batteryDrainPerHour": 21,
        "confidenceLevel": "Verified",
        "notes": "Slightly clocked MT6737T achieves 20-24 FPS on Smooth Low."
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
        "notes": "Unsupported."
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
      "18:9 modern display",
      "Dual rear cameras"
    ],
    "cons": [
      "Sub-25 FPS gaming",
      "Cannot sustain competitive ranked matches"
    ],
    "verdict": "Low-tier playable device with frequent frame drops."
  },
  {
    "id": "qmobile-noir-e2",
    "brand": "QMobile",
    "model": "QMobile Noir E2",
    "slug": "qmobile-noir-e2",
    "brandSlug": "qmobile",
    "releaseYear": 2017,
    "chipset": "MediaTek MT6737 1.3 GHz Quad-Core",
    "gpu": "Mali-T720",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.2\" HD IPS Oncell Display",
    "batteryCapacity": 4000,
    "antutuScore": 35000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.8,
    "popularityRank": 8,
    "benchmarkDate": "2024-01-10",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 22,
        "fpsMin": 16,
        "fpsMax": 25,
        "stabilityScore": 63,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 16,
        "confidenceLevel": "Verified",
        "notes": "Big 4000mAh battery provides long endurance, but CPU bottleneck holds FPS to 18-22 FPS."
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
        "notes": "Unsupported."
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
      "Long battery life with 4000mAh cell",
      "3GB RAM for stability"
    ],
    "cons": [
      "Underpowered CPU causes 18-22 FPS",
      "Slow touch response"
    ],
    "verdict": "Good battery life, but very low 20-22 FPS performance."
  },
  {
    "id": "qmobile-king-kong-max",
    "brand": "QMobile",
    "model": "QMobile King Kong Max",
    "slug": "qmobile-king-kong-max",
    "brandSlug": "qmobile",
    "releaseYear": 2017,
    "chipset": "MediaTek MT6737 1.3 GHz Quad-Core",
    "gpu": "Mali-T720",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.3\" HD IPS Display",
    "batteryCapacity": 4000,
    "antutuScore": 36000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.8,
    "popularityRank": 9,
    "benchmarkDate": "2024-01-08",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 22,
        "fpsMin": 16,
        "fpsMax": 25,
        "stabilityScore": 63,
        "thermalRisk": "Moderate",
        "batteryDrainPerHour": 15,
        "confidenceLevel": "Verified",
        "notes": "Smooth Low runs at 18-22 FPS. 4000mAh battery allows extended play."
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
        "notes": "Unsupported."
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
      "Solid 4000mAh battery",
      "Metallic finish"
    ],
    "cons": [
      "Heavy input lag",
      "18-22 FPS in combat"
    ],
    "verdict": "Basic low-spec gaming phone."
  },
  {
    "id": "qmobile-blue-max",
    "brand": "QMobile",
    "model": "QMobile Blue Max",
    "slug": "qmobile-blue-max",
    "brandSlug": "qmobile",
    "releaseYear": 2020,
    "chipset": "Unisoc SC9863A (28nm) Octa-Core",
    "gpu": "PowerVR GE8322",
    "ramOptions": [
      "3GB LPDDR4X"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.6\" HD+ Waterdrop Notch IPS",
    "batteryCapacity": 4000,
    "antutuScore": 92000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 30,
    "overallGamingRating": 5.3,
    "popularityRank": 10,
    "benchmarkDate": "2024-02-18",
    "benchmarkSource": "Pakistani Retail Testing Matrix",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)",
          "30 FPS (Medium)"
        ],
        "estimatedFps": 27,
        "fpsMin": 20,
        "fpsMax": 30,
        "stabilityScore": 71,
        "thermalRisk": "High",
        "batteryDrainPerHour": 18,
        "confidenceLevel": "Verified",
        "notes": "One of the final QMobile releases. Unisoc SC9863A runs modern 64-bit Android, reaching 25-28 FPS on Smooth Medium."
      },
      "Balanced": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 22,
        "fpsMin": 17,
        "fpsMax": 25,
        "stabilityScore": 66,
        "thermalRisk": "High",
        "batteryDrainPerHour": 20,
        "confidenceLevel": "Verified",
        "notes": "Runs around 20-22 FPS."
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
      "Waterdrop notch with 6.6-inch screen",
      "Octa-core CPU with Android 9/10",
      "4000mAh battery"
    ],
    "cons": [
      "PowerVR GE8322 GPU throttles after 25 mins",
      "Software gyroscope has noticeable delay"
    ],
    "verdict": "One of the most modern QMobile phones, supporting up to 27-30 FPS on Smooth."
  },
  {
    "id": "qmobile-qsmart-hot-pro",
    "brand": "QMobile",
    "model": "QMobile QSmart Hot Pro",
    "slug": "qmobile-qsmart-hot-pro",
    "brandSlug": "qmobile",
    "releaseYear": 2019,
    "chipset": "Unisoc SC9863A Octa-Core",
    "gpu": "PowerVR GE8322",
    "ramOptions": [
      "2GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "6.0\" HD+ IPS Display",
    "batteryCapacity": 3000,
    "antutuScore": 82000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.7,
    "popularityRank": 11,
    "benchmarkDate": "2024-02-12",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 22,
        "fpsMin": 16,
        "fpsMax": 25,
        "stabilityScore": 64,
        "thermalRisk": "High",
        "batteryDrainPerHour": 21,
        "confidenceLevel": "Verified",
        "notes": "2GB RAM causes low-memory stutter. Game is playable at 20-22 FPS on Smooth Low."
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
        "notes": "Unsupported."
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
      "Affordable 6.0-inch display",
      "Octa-core processor"
    ],
    "cons": [
      "2GB RAM causes background app killing",
      "Severe lag in close combat"
    ],
    "verdict": "Very laggy 20-22 FPS experience."
  },
  {
    "id": "qmobile-noir-a6",
    "brand": "QMobile",
    "model": "QMobile Noir A6",
    "slug": "qmobile-noir-a6",
    "brandSlug": "qmobile",
    "releaseYear": 2016,
    "chipset": "MediaTek MT6735P 1.0 GHz Quad-Core",
    "gpu": "Mali-T720",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" HD IPS Oncell Display",
    "batteryCapacity": 2500,
    "antutuScore": 32000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 20,
    "overallGamingRating": 4.4,
    "popularityRank": 12,
    "benchmarkDate": "2024-01-05",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)"
        ],
        "estimatedFps": 19,
        "fpsMin": 14,
        "fpsMax": 20,
        "stabilityScore": 58,
        "thermalRisk": "High",
        "batteryDrainPerHour": 24,
        "confidenceLevel": "Verified",
        "notes": "1.0 GHz CPU clock is severely bottlenecked. Runs around 16-19 FPS with heavy stutter."
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
        "notes": "Unsupported."
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
      "Metal back casing",
      "3GB RAM for stability"
    ],
    "cons": [
      "Extremely slow 1.0 GHz CPU",
      "Under 20 FPS in combat"
    ],
    "verdict": "Sub-20 FPS laggy gameplay."
  },
  {
    "id": "qmobile-noir-lt700-pro",
    "brand": "QMobile",
    "model": "QMobile Noir LT700 Pro",
    "slug": "qmobile-noir-lt700-pro",
    "brandSlug": "qmobile",
    "releaseYear": 2016,
    "chipset": "MediaTek MT6735 1.3 GHz Quad-Core",
    "gpu": "Mali-T720",
    "ramOptions": [
      "3GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" HD IPS Display",
    "batteryCapacity": 2400,
    "antutuScore": 34000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 25,
    "overallGamingRating": 4.6,
    "popularityRank": 13,
    "benchmarkDate": "2024-01-05",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)",
          "25 FPS (Low)"
        ],
        "estimatedFps": 21,
        "fpsMin": 15,
        "fpsMax": 25,
        "stabilityScore": 61,
        "thermalRisk": "High",
        "batteryDrainPerHour": 25,
        "confidenceLevel": "Verified",
        "notes": "Runs Smooth Low at 18-21 FPS. Small 2400mAh battery drains within 90 minutes."
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
        "notes": "Unsupported."
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
      "3GB RAM prevents immediate crash",
      "4G LTE connectivity"
    ],
    "cons": [
      "Tiny 2400mAh battery",
      "Low 20 FPS frame rate"
    ],
    "verdict": "Very limited gaming capability."
  },
  {
    "id": "qmobile-noir-s6-plus",
    "brand": "QMobile",
    "model": "QMobile Noir S6 Plus",
    "slug": "qmobile-noir-s6-plus",
    "brandSlug": "qmobile",
    "releaseYear": 2016,
    "chipset": "MediaTek MT6580 1.3 GHz Quad-Core",
    "gpu": "Mali-400 MP2",
    "ramOptions": [
      "2GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.5\" HD IPS 2.5D Curved Glass",
    "batteryCapacity": 2500,
    "antutuScore": 26000,
    "gyroscope": "Software Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 20,
    "overallGamingRating": 3.8,
    "popularityRank": 14,
    "benchmarkDate": "2024-01-02",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)"
        ],
        "estimatedFps": 18,
        "fpsMin": 12,
        "fpsMax": 20,
        "stabilityScore": 52,
        "thermalRisk": "Severe",
        "batteryDrainPerHour": 26,
        "confidenceLevel": "Verified",
        "notes": "Mali-400 MP2 lacks hardware support for modern shaders. Stutters heavily at 14-18 FPS."
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
        "notes": "Unsupported."
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
      "Rear fingerprint scanner"
    ],
    "cons": [
      "Mali-400 GPU is obsolete",
      "Severe stutter under 18 FPS"
    ],
    "verdict": "Hard to play; severe lag and low frame rate."
  },
  {
    "id": "qmobile-noir-z9-plus",
    "brand": "QMobile",
    "model": "QMobile Noir Z9 Plus",
    "slug": "qmobile-noir-z9-plus",
    "brandSlug": "qmobile",
    "releaseYear": 2015,
    "chipset": "Qualcomm Snapdragon 415 Octa-Core",
    "gpu": "Adreno 405",
    "ramOptions": [
      "2GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.5\" HD AMOLED Display",
    "batteryCapacity": 3150,
    "antutuScore": 35000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 20,
    "overallGamingRating": 4.2,
    "popularityRank": 15,
    "benchmarkDate": "2024-01-02",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)"
        ],
        "estimatedFps": 19,
        "fpsMin": 14,
        "fpsMax": 20,
        "stabilityScore": 56,
        "thermalRisk": "High",
        "batteryDrainPerHour": 22,
        "confidenceLevel": "Verified",
        "notes": "Snapdragon 415 and 2GB RAM run Smooth Low at 17-20 FPS with frequent micro-freezes."
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
        "notes": "Unsupported."
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
      "Vivid AMOLED screen",
      "Qualcomm Snapdragon chipset"
    ],
    "cons": [
      "Only 2GB RAM causes stutter",
      "Below 20 FPS in fire fights"
    ],
    "verdict": "Very weak gaming performance."
  },
  {
    "id": "qmobile-noir-z8",
    "brand": "QMobile",
    "model": "QMobile Noir Z8",
    "slug": "qmobile-noir-z8",
    "brandSlug": "qmobile",
    "releaseYear": 2015,
    "chipset": "Qualcomm Snapdragon 410 (64-bit) 1.2 GHz Quad-Core",
    "gpu": "Adreno 306",
    "ramOptions": [
      "2GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" HD AMOLED",
    "batteryCapacity": 2400,
    "antutuScore": 28000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 20,
    "overallGamingRating": 4,
    "popularityRank": 16,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Community Benchmarks",
    "graphicsModes": {
      "Smooth": {
        "supported": true,
        "fpsOptions": [
          "20 FPS (Low)"
        ],
        "estimatedFps": 18,
        "fpsMin": 12,
        "fpsMax": 20,
        "stabilityScore": 54,
        "thermalRisk": "High",
        "batteryDrainPerHour": 24,
        "confidenceLevel": "Verified",
        "notes": "First 4G LTE smartphone from QMobile. Adreno 306 renders Smooth Low at 15-18 FPS."
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
        "notes": "Unsupported."
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
      "Historically significant first 4G QMobile phone",
      "Qualcomm Snapdragon 410 64-bit architecture"
    ],
    "cons": [
      "Adreno 306 struggles under modern 3D rendering",
      "Frequent frame drops down to 12 FPS"
    ],
    "verdict": "Borderline unplayable on modern versions."
  },
  {
    "id": "qmobile-noir-i6-metal-one",
    "brand": "QMobile",
    "model": "QMobile Noir i6 Metal ONE",
    "slug": "qmobile-noir-i6-metal-one",
    "brandSlug": "qmobile",
    "releaseYear": 2016,
    "chipset": "MediaTek MT6580 1.3 GHz Quad-Core",
    "gpu": "Mali-400 MP",
    "ramOptions": [
      "1GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" HD IPS Display",
    "batteryCapacity": 2000,
    "antutuScore": 22000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 17,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Legacy Device Matrix",
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
        "notes": "1GB RAM cannot load PUBG Mobile 3.4+ textures. The game crashes with Out-Of-Memory (OOM) error before reaching the lobby."
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
        "notes": "Unsupported."
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
      "Affordable metal back design in its time"
    ],
    "cons": [
      "Only 1GB RAM causes immediate crash",
      "Mali-400 lacks required OpenGL ES 3.1+ support"
    ],
    "verdict": "Unsupported hardware. PUBG Mobile cannot run on 1GB RAM."
  },
  {
    "id": "qmobile-noir-s1",
    "brand": "QMobile",
    "model": "QMobile Noir S1",
    "slug": "qmobile-noir-s1",
    "brandSlug": "qmobile",
    "releaseYear": 2015,
    "chipset": "MediaTek MT6582 1.3 GHz Quad-Core",
    "gpu": "Mali-400 MP2",
    "ramOptions": [
      "1GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" FWVGA Display",
    "batteryCapacity": 2000,
    "antutuScore": 19000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 18,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Legacy Device Matrix",
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
        "notes": "1GB RAM and 32-bit Android 5.0 Lollipop fail minimum PUBG Mobile 64-bit and 3GB memory specifications."
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
        "notes": "Unsupported."
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
      "Historic selfie smartphone from QMobile"
    ],
    "cons": [
      "1GB RAM and obsolete Android version"
    ],
    "verdict": "Unsupported hardware."
  },
  {
    "id": "qmobile-noir-i9",
    "brand": "QMobile",
    "model": "QMobile Noir i9",
    "slug": "qmobile-noir-i9",
    "brandSlug": "qmobile",
    "releaseYear": 2014,
    "chipset": "MediaTek MT6582 1.3 GHz Quad-Core",
    "gpu": "Mali-400 MP2",
    "ramOptions": [
      "1GB LPDDR2"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" HD IPS Display",
    "batteryCapacity": 1800,
    "antutuScore": 17000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 19,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Legacy Device Matrix",
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
        "notes": "Obsolete 32-bit hardware and 1GB RAM. Fails to install from Google Play Store."
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
        "notes": "Unsupported."
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
      "Classic Pakistani smartphone"
    ],
    "cons": [
      "Cannot run PUBG Mobile"
    ],
    "verdict": "Unsupported hardware."
  },
  {
    "id": "qmobile-noir-i12",
    "brand": "QMobile",
    "model": "QMobile Noir i12",
    "slug": "qmobile-noir-i12",
    "brandSlug": "qmobile",
    "releaseYear": 2014,
    "chipset": "MediaTek MT6592 1.7 GHz Octa-Core",
    "gpu": "Mali-450 MP4",
    "ramOptions": [
      "2GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" FHD IPS (Slim 6.9mm body)",
    "batteryCapacity": 2000,
    "antutuScore": 29000,
    "gyroscope": "Hardware Gyro",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1.5,
    "popularityRank": 20,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Legacy Device Matrix",
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
        "notes": "MT6592 is a 32-bit Cortex-A7 architecture running Android 4.4 KitKat. Lacks 64-bit instruction set and Vulkan APIs required by modern PUBG Mobile."
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
        "notes": "Unsupported."
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
      "Ultra-slim 6.9mm stylish design in its day",
      "Octa-core MT6592 processor"
    ],
    "cons": [
      "Obsolete 32-bit CPU architecture",
      "Incompatible with PUBG Mobile 3.0+"
    ],
    "verdict": "Unsupported hardware."
  },
  {
    "id": "qmobile-noir-a10",
    "brand": "QMobile",
    "model": "QMobile Noir A10",
    "slug": "qmobile-noir-a10",
    "brandSlug": "qmobile",
    "releaseYear": 2013,
    "chipset": "MediaTek MT6577 1.0 GHz Dual-Core",
    "gpu": "PowerVR SGX531",
    "ramOptions": [
      "512MB RAM"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.0\" IPS LCD (480x854)",
    "batteryCapacity": 2000,
    "antutuScore": 9000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 21,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Legacy Device Matrix",
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
        "notes": "Legendary pioneer of large-screen Android smartphones in Pakistan. 512MB RAM and Dual-Core MT6577 cannot run modern 3D games. Completely incompatible."
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
        "notes": "Unsupported."
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
      "Historical icon that started the Pakistani smartphone revolution"
    ],
    "cons": [
      "512MB RAM and obsolete dual-core CPU"
    ],
    "verdict": "Unsupported hardware."
  },
  {
    "id": "qmobile-noir-a2",
    "brand": "QMobile",
    "model": "QMobile Noir A2",
    "slug": "qmobile-noir-a2",
    "brandSlug": "qmobile",
    "releaseYear": 2012,
    "chipset": "MediaTek MT6515 1.0 GHz Single-Core",
    "gpu": "PowerVR SGX531",
    "ramOptions": [
      "256MB RAM",
      "512MB RAM"
    ],
    "displayRefreshRate": 60,
    "screenSize": "3.5\" HVGA Display",
    "batteryCapacity": 1400,
    "antutuScore": 4000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 22,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Legacy Device Matrix",
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
        "notes": "Pakistan's first affordable Android phone running Android 2.3 Gingerbread. Entirely incompatible with PUBG Mobile."
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
        "notes": "Unsupported."
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
      "Historical antique — Pakistan's first mass-market smartphone"
    ],
    "cons": [
      "Incompatible with all modern software"
    ],
    "verdict": "Unsupported hardware."
  },
  {
    "id": "qmobile-rocket-lite",
    "brand": "QMobile",
    "model": "QMobile Rocket Lite",
    "slug": "qmobile-rocket-lite",
    "brandSlug": "qmobile",
    "releaseYear": 2019,
    "chipset": "Spreadtrum SC7731E 1.3 GHz Quad-Core",
    "gpu": "Mali-T820",
    "ramOptions": [
      "1GB LPDDR3"
    ],
    "displayRefreshRate": 60,
    "screenSize": "5.7\" 18:9 FullView Display",
    "batteryCapacity": 2800,
    "antutuScore": 24000,
    "gyroscope": "Not Supported",
    "coolingSystem": "Passive",
    "pubgOfficialPartner": false,
    "maxSupportedFps": 0,
    "isUnsupportedHardware": true,
    "overallGamingRating": 1,
    "popularityRank": 23,
    "benchmarkDate": "2024-01-01",
    "benchmarkSource": "Pakistani Legacy Device Matrix",
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
        "notes": "Android Go Edition phone with 1GB RAM. Modern PUBG Mobile crashes on installation due to insufficient memory."
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
        "notes": "Unsupported."
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
      "Low cost 18:9 budget phone"
    ],
    "cons": [
      "1GB RAM cannot run PUBG Mobile"
    ],
    "verdict": "Unsupported hardware."
  }
];
