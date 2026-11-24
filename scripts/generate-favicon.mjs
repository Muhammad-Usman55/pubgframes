import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  return table;
}

const crcTable = createCRC32Table();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcPayload = Buffer.concat([typeBuf, data]);
  const crcVal = crc32(crcPayload);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function generateReticlePng(size) {
  const width = size;
  const height = size;
  const rawScanlines = [];

  // Colors
  const BG = [7, 10, 14, 255];          // #070A0E
  const GOLD = [255, 212, 0, 255];      // #FFD400
  const GREEN = [57, 245, 106, 255];    // #39F56A

  const center = size / 2;
  const radius = size * 0.32;

  for (let y = 0; y < height; y++) {
    const row = [0]; // filter byte 0 (None)
    for (let x = 0; x < width; x++) {
      let color = BG;

      // Rounded border (radius ~ 4px)
      const isOuterBorder =
        (x === 1 || x === width - 2) && (y >= 4 && y <= height - 5) ||
        (y === 1 || y === height - 2) && (x >= 4 && x <= width - 5) ||
        // corners
        ((x === 2 || x === width - 3) && (y === 2 || y === height - 3));

      // Tactical bracket corners
      const isBracket =
        // Top-left
        ((x >= 3 && x <= 9 && (y === 3 || y === 4)) || (y >= 3 && y <= 9 && (x === 3 || x === 4))) ||
        // Top-right
        ((x >= width - 10 && x <= width - 4 && (y === 3 || y === 4)) || (y >= 3 && y <= 9 && (x === width - 4 || x === width - 5))) ||
        // Bottom-left
        ((x >= 3 && x <= 9 && (y === height - 4 || y === height - 5)) || (y >= height - 10 && y <= height - 4 && (x === 3 || x === 4))) ||
        // Bottom-right
        ((x >= width - 10 && x <= width - 4 && (y === height - 4 || y === height - 5)) || (y >= height - 10 && y <= height - 4 && (x === width - 4 || x === width - 5)));

      // Circle distance from center
      const dx = x + 0.5 - center;
      const dy = y + 0.5 - center;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Aim reticle ring
      const isRing = Math.abs(dist - radius) <= 1.2;

      // Reticle tick crosshairs
      const isCrosshair =
        (Math.abs(dx) <= 1 && ((dy >= -radius - 3 && dy <= -radius + 2) || (dy >= radius - 2 && dy <= radius + 3))) ||
        (Math.abs(dy) <= 1 && ((dx >= -radius - 3 && dx <= -radius + 2) || (dx >= radius - 2 && dx <= radius + 3)));

      // Center dot
      const isCenterDot = dist <= 2.2;

      // Corner status light
      const isStatusLight = (x >= width - 7 && x <= width - 5 && y >= 5 && y <= 7);

      if (isCenterDot) {
        color = GOLD;
      } else if (isRing || isCrosshair || isStatusLight) {
        color = GREEN;
      } else if (isBracket) {
        color = GOLD;
      } else if (isOuterBorder) {
        color = [255, 212, 0, 100]; // semi-transparent gold
      }

      row.push(...color);
    }
    rawScanlines.push(Buffer.from(row));
  }

  const rawData = Buffer.concat(rawScanlines);
  const compressedData = zlib.deflateSync(rawData);

  // PNG Header
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR Chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type: RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function pngToIco(pngBuffer, size = 32) {
  // 6-byte ICO header
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1: ICO
  header.writeUInt16LE(1, 4); // 1 image

  // 16-byte Directory entry
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color palette: 0
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // size of image data in bytes
  entry.writeUInt32LE(22, 12); // offset of image data (6 + 16 = 22)

  return Buffer.concat([header, entry, pngBuffer]);
}

// 1. Generate 32x32 PNG & ICO
const png32 = generateReticlePng(32);
const ico32 = pngToIco(png32, 32);

// 2. Generate 192x192 PNG for Apple Touch Icon & PWA
const png192 = generateReticlePng(192);

// Write to files
fs.writeFileSync(path.join(process.cwd(), 'public', 'favicon.ico'), ico32);
fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'favicon.ico'), ico32);
fs.writeFileSync(path.join(process.cwd(), 'public', 'icon.png'), png32);
fs.writeFileSync(path.join(process.cwd(), 'public', 'apple-touch-icon.png'), png192);

console.log('✓ Successfully generated PUBG Reticle favicon.ico (public & src/app)!');
console.log('✓ Successfully generated icon.png (32x32) and apple-touch-icon.png (192x192)!');
