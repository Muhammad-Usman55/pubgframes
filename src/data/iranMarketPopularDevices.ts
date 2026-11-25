import { DeviceInfo } from '@/types/device';
import { createDevice } from './deviceFactory';

/**
 * Top Popular Retail / Digikala Iran-Market Models Missing from Catalog:
 * Samsung Galaxy A16 (4G), POCO M6 (4G), Honor 200 Smart / X7c / X6b / X5b Plus, Huawei nova Y91 / Y72.
 */
export const IRAN_MARKET_POPULAR_DEVICES: DeviceInfo[] = [
  createDevice({
    brand: 'Samsung',
    model: 'Galaxy A16 (4G)',
    slug: 'samsung-galaxy-a16-4g',
    releaseYear: 2024,
    chipset: 'MediaTek Helio G99 (6nm)',
    gpu: 'Mali-G57 MC2',
    ramOptions: ['4GB', '6GB', '8GB'],
    displayRefreshRate: 90,
    screenSize: '6.7" FHD+ Super AMOLED 90Hz',
    batteryCapacity: 5000,
    antutuScore: 415000,
    gyroscope: 'Hardware Gyro',
    maxSupportedFps: 60,
    overallGamingRating: 7.4
  }),
  createDevice({
    brand: 'POCO',
    model: 'POCO M6 (4G)',
    slug: 'poco-m6-4g',
    releaseYear: 2024,
    chipset: 'MediaTek Helio G91 Ultra (12nm)',
    gpu: 'Mali-G52 MC2',
    ramOptions: ['6GB', '8GB'],
    displayRefreshRate: 90,
    screenSize: '6.79" FHD+ IPS LCD 90Hz',
    batteryCapacity: 5030,
    antutuScore: 275000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 40,
    overallGamingRating: 6.4
  }),
  createDevice({
    brand: 'Honor',
    model: 'Honor 200 Smart',
    releaseYear: 2024,
    chipset: 'Qualcomm Snapdragon 4 Gen 2 (4nm)',
    gpu: 'Adreno 613',
    ramOptions: ['4GB', '8GB'],
    displayRefreshRate: 120,
    screenSize: '6.8" FHD+ TFT LCD 120Hz',
    batteryCapacity: 5200,
    antutuScore: 445000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 60,
    overallGamingRating: 7.3
  }),
  createDevice({
    brand: 'Honor',
    model: 'Honor X7c',
    releaseYear: 2024,
    chipset: 'Qualcomm Snapdragon 685 (6nm)',
    gpu: 'Adreno 610',
    ramOptions: ['6GB', '8GB'],
    displayRefreshRate: 120,
    screenSize: '6.77" HD+ TFT LCD 120Hz',
    batteryCapacity: 6000,
    antutuScore: 345000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 40,
    overallGamingRating: 6.7
  }),
  createDevice({
    brand: 'Honor',
    model: 'Honor X6b',
    releaseYear: 2024,
    chipset: 'MediaTek Helio G85 (12nm)',
    gpu: 'Mali-G52 MC2',
    ramOptions: ['4GB', '6GB'],
    displayRefreshRate: 90,
    screenSize: '6.56" HD+ TFT LCD 90Hz',
    batteryCapacity: 5200,
    antutuScore: 245000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 40,
    overallGamingRating: 6.1
  }),
  createDevice({
    brand: 'Honor',
    model: 'Honor X5b Plus',
    releaseYear: 2024,
    chipset: 'MediaTek Helio G36 (12nm)',
    gpu: 'PowerVR GE8320',
    ramOptions: ['4GB'],
    displayRefreshRate: 90,
    screenSize: '6.56" HD+ TFT LCD 90Hz',
    batteryCapacity: 5200,
    antutuScore: 145000,
    gyroscope: 'Not Supported',
    maxSupportedFps: 30,
    overallGamingRating: 5.0
  }),
  createDevice({
    brand: 'Huawei',
    model: 'nova Y91',
    releaseYear: 2023,
    chipset: 'Qualcomm Snapdragon 680 4G (6nm)',
    gpu: 'Adreno 610',
    ramOptions: ['8GB'],
    displayRefreshRate: 90,
    screenSize: '6.95" FHD+ IPS LCD 90Hz',
    batteryCapacity: 7000,
    antutuScore: 315000,
    gyroscope: 'Hardware Gyro',
    maxSupportedFps: 40,
    overallGamingRating: 6.6
  }),
  createDevice({
    brand: 'Huawei',
    model: 'nova Y72',
    releaseYear: 2024,
    chipset: 'HiSilicon Kirin 710A (14nm)',
    gpu: 'Mali-G51 MP4',
    ramOptions: ['8GB'],
    displayRefreshRate: 60,
    screenSize: '6.75" HD+ IPS LCD 60Hz',
    batteryCapacity: 6000,
    antutuScore: 215000,
    gyroscope: 'Software Gyro',
    maxSupportedFps: 30,
    overallGamingRating: 5.6
  })
];
