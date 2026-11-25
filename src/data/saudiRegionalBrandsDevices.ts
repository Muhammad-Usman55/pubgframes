import { DeviceInfo } from '@/types/device';
import { createDevice } from './deviceFactory';

/**
 * Saudi Arabia (KSA) & GCC Regional Electronics/Mobile Brands:
 * G-Tab, i-Life Digital, Xtouch, and Touchmate (retailed widely across Jarir, eXtra, Lulu, Noon SA).
 */
export const SAUDI_REGIONAL_BRANDS_DEVICES: DeviceInfo[] = [
  // --- G-TAB (GCC / KSA VALUE TABLETS) ---
  createDevice({
    brand: 'G-Tab',
    brandSlug: 'g-tab',
    model: 'G-Tab Pad 10 Pro',
    releaseYear: 2024,
    chipset: 'Unisoc Tiger T606 (12nm)',
    gpu: 'Mali-G57 MP1',
    ramOptions: ['4GB', '6GB'],
    displayRefreshRate: 60,
    screenSize: '10.1" IPS LCD 60Hz',
    batteryCapacity: 6580,
    antutuScore: 245000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 40,
    overallGamingRating: 6.0
  }),
  createDevice({
    brand: 'G-Tab',
    brandSlug: 'g-tab',
    model: 'G-Tab T10',
    releaseYear: 2023,
    chipset: 'Unisoc Tiger T310 (12nm Quad-Core)',
    gpu: 'PowerVR GE8300',
    ramOptions: ['4GB'],
    displayRefreshRate: 60,
    screenSize: '10.1" IPS LCD 60Hz',
    batteryCapacity: 6580,
    antutuScore: 155000,
    gyroscope: 'Not Supported',
    maxSupportedFps: 25,
    overallGamingRating: 4.7
  }),
  createDevice({
    brand: 'G-Tab',
    brandSlug: 'g-tab',
    model: 'G-Tab C10 Pro',
    releaseYear: 2023,
    chipset: 'Quad-Core 2.0GHz Entry SoC',
    gpu: 'Mali-G52',
    ramOptions: ['4GB'],
    displayRefreshRate: 60,
    screenSize: '10.1" IPS LCD 60Hz',
    batteryCapacity: 6000,
    antutuScore: 140000,
    gyroscope: 'Not Supported',
    maxSupportedFps: 25,
    overallGamingRating: 4.5
  }),

  // --- I-LIFE DIGITAL (GCC / KSA) ---
  createDevice({
    brand: 'i-Life',
    brandSlug: 'i-life',
    model: 'Spark Tablet',
    slug: 'i-life-spark-tablet',
    releaseYear: 2023,
    chipset: 'MediaTek Helio G80 (MT6769 Octa-Core)',
    gpu: 'Mali-G52 MC2',
    ramOptions: ['6GB'],
    displayRefreshRate: 60,
    screenSize: '10.36" FHD+ IPS LCD 60Hz',
    batteryCapacity: 6000,
    antutuScore: 215000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 40,
    overallGamingRating: 6.0
  }),
  createDevice({
    brand: 'i-Life',
    brandSlug: 'i-life',
    model: 'ZedNote 14',
    slug: 'i-life-zednote-14',
    releaseYear: 2020,
    chipset: 'Intel Atom x5-Z8350 (Quad-Core)',
    gpu: 'Intel HD Graphics',
    ramOptions: ['2GB', '4GB'],
    displayRefreshRate: 60,
    screenSize: '14.0" HD 2-in-1 Touchscreen',
    batteryCapacity: 8000,
    gyroscope: 'Not Supported',
    maxSupportedFps: 0,
    overallGamingRating: 1.5,
    isUnsupportedHardware: true,
    notes: 'Windows 10 convertible device; does not run native Android/iOS PUBG Mobile clients.'
  }),

  // --- XTOUCH (GCC SMARTPHONES) ---
  createDevice({
    brand: 'Xtouch',
    model: 'Xtouch X10',
    releaseYear: 2018,
    chipset: 'MediaTek MT6737H (Quad-Core)',
    gpu: 'Mali-T720 MP2',
    ramOptions: ['2GB'],
    displayRefreshRate: 60,
    screenSize: '5.8" HD+ IPS LCD 60Hz',
    batteryCapacity: 4000,
    antutuScore: 42000,
    gyroscope: 'Not Supported',
    maxSupportedFps: 20,
    overallGamingRating: 2.6
  }),
  createDevice({
    brand: 'Xtouch',
    model: 'Xtouch E2',
    releaseYear: 2017,
    chipset: 'MediaTek Quad-Core 1.3GHz',
    gpu: 'Mali-400 MP2',
    ramOptions: ['1GB'],
    displayRefreshRate: 60,
    screenSize: '5.0" FWVGA LCD 60Hz',
    batteryCapacity: 3600,
    gyroscope: 'Not Supported',
    maxSupportedFps: 0,
    overallGamingRating: 1.4,
    isUnsupportedHardware: true,
    notes: '1GB RAM / legacy GCC entry phone falls below PUBG Mobile minimum requirements.'
  }),

  // --- TOUCHMATE (GCC TABLETS) ---
  createDevice({
    brand: 'Touchmate',
    model: 'Touchmate 4G Pro Tablet',
    releaseYear: 2024,
    chipset: 'MediaTek Helio G80 (MT8786 Octa-Core)',
    gpu: 'Mali-G52 MC2',
    ramOptions: ['4GB'],
    displayRefreshRate: 60,
    screenSize: '11.97" IPS Calling Display',
    batteryCapacity: 4000,
    antutuScore: 210000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 40,
    overallGamingRating: 5.9
  })
];
