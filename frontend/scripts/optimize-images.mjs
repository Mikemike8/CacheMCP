import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(projectRoot, "source-assets", "photos");
const graphicSourceDir = path.join(projectRoot, "source-assets", "graphics");
const outputDir = path.join(projectRoot, "public", "assets", "optimized");

const photos = [
  { name: "landing-hero", source: "landing-hero.jpg", widths: [640, 960, 1280, 1600, 1920], quality: 74 },
  { name: "story-exterior", source: "story-exterior.jpg", widths: [480, 720, 960, 1200, 1500], quality: 76 },
  { name: "events-interior", source: "events-interior.jpg", widths: [640, 960, 1280, 1440], quality: 74 },
  { name: "instagram-1", source: "instagram-1.jpg", widths: [360, 520, 720, 900], quality: 76 },
  { name: "instagram-2", source: "instagram-2.jpg", widths: [360, 520, 720, 900], quality: 76 },
  { name: "instagram-3", source: "instagram-3.jpg", widths: [360, 520, 720, 900], quality: 76 },
  { name: "instagram-4", source: "instagram-4.jpg", widths: [360, 520, 720, 900], quality: 76 },
  { name: "instagram-5", source: "instagram-5.jpg", widths: [360, 520, 720, 900], quality: 76 },
  { name: "instagram-6", source: "instagram-6.jpg", widths: [360, 520, 720, 900], quality: 76 },
  { name: "menu-hero", source: "menu-hero.jpg", widths: [640, 960, 1212], quality: 74 },
  { name: "menu-brunch", source: "menu-brunch.jpg", widths: [480, 720, 960, 1200], quality: 76 },
  { name: "menu-lunch", source: "menu-lunch.jpg", widths: [480, 720, 960, 1200], quality: 76 },
  { name: "about-hero", source: "about-hero.jpg", widths: [640, 960, 1280, 1440], quality: 74 },
  { name: "about-video", source: "about-video.jpg", widths: [640, 960, 1280, 1600], quality: 76 },
  { name: "events-card-brunch", source: "events-card-brunch.jpg", widths: [360, 520, 720, 960], quality: 76 },
  { name: "events-card-beat", source: "events-card-beat.jpg", widths: [360, 520, 720, 960], quality: 76 },
  { name: "events-card-rnb", source: "events-card-rnb.jpg", widths: [360, 520, 720, 960], quality: 76 },
  { name: "contact-hero", source: "contact-hero.jpg", widths: [640, 960, 1280, 1440], quality: 74 },
  { name: "contact-map", source: "contact-map.jpg", widths: [640, 960, 1280, 1600], quality: 76 },
  { name: "book-hero", source: "book-hero.jpg", widths: [640, 960, 1280, 1600], quality: 74 },
];

const graphics = [{ name: "landing-logo", source: "landing-logo.png", widths: [170, 300], quality: 86 }];

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kb = bytes / 1024;
  if (kb < 1024) {
    return `${Math.round(kb)} KB`;
  }

  return `${(kb / 1024).toFixed(1)} MB`;
}

function uniqueWidths(widths, maxWidth) {
  return [...new Set(widths.filter((width) => width <= maxWidth))];
}

await fs.mkdir(outputDir, { recursive: true });

let originalBytes = 0;
let largestVariantBytes = 0;

async function optimizeAsset(asset, assetSourceDir) {
  const sourcePath = path.join(assetSourceDir, asset.source);
  const sourceStats = await fs.stat(sourcePath);
  const metadata = await sharp(sourcePath).metadata();
  const widths = uniqueWidths(asset.widths, metadata.width);

  originalBytes += sourceStats.size;

  let largestForPhoto = 0;

  for (const width of widths) {
    const outputPath = path.join(outputDir, `${asset.name}-${width}.webp`);

    await sharp(sourcePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: asset.quality, effort: 6 })
      .toFile(outputPath);

    const outputStats = await fs.stat(outputPath);
    largestForPhoto = Math.max(largestForPhoto, outputStats.size);
  }

  largestVariantBytes += largestForPhoto;
  console.log(`${asset.source}: ${formatBytes(sourceStats.size)} -> ${formatBytes(largestForPhoto)} largest WebP`);
}

for (const photo of photos) {
  await optimizeAsset(photo, sourceDir);
}

for (const graphic of graphics) {
  await optimizeAsset(graphic, graphicSourceDir);
}

const savedBytes = originalBytes - largestVariantBytes;
const savedPercent = Math.round((savedBytes / originalBytes) * 100);

console.log("");
console.log(`Original JPG payload: ${formatBytes(originalBytes)}`);
console.log(`Largest responsive WebP payload: ${formatBytes(largestVariantBytes)}`);
console.log(`Estimated per-page image savings: ${formatBytes(savedBytes)} (${savedPercent}%)`);
