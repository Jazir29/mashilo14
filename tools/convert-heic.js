// Convierte los 4 archivos HEIC a JPG y los coloca en web/assets/
const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

const SRC_DIR = path.resolve(__dirname, '..', 'Fotos y videos');
const OUT_DIR = path.resolve(__dirname, '..', 'web', 'assets');

const files = ['7.HEIC', '8.HEIC', '10.HEIC', '11.HEIC'];

(async () => {
  for (const file of files) {
    const inputPath = path.join(SRC_DIR, file);
    const outputPath = path.join(OUT_DIR, file.replace(/\.HEIC$/i, '.jpg'));
    try {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.85
      });
      fs.writeFileSync(outputPath, outputBuffer);
      console.log(`OK: ${file} -> ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`ERROR convirtiendo ${file}:`, err.message);
    }
  }
})();
