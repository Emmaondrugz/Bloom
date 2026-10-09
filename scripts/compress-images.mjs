import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import sharp from "sharp";

const dirs = ["public", "public/icons"];
const exts = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const MAX_WIDTH = 1920;

async function archiveOriginal(file) {
  const relativePath = path.relative("public", file);
  const originalPath = path.join("public", "old", relativePath);
  const dir = path.dirname(originalPath);
  const ext = path.extname(originalPath);
  const name = path.basename(originalPath, ext);

  await fs.mkdir(dir, { recursive: true });
  for (let version = 0; ; version++) {
    const backupPath =
      version === 0
        ? originalPath
        : path.join(dir, `${name}-${version}${ext}`);
    try {
      await fs.copyFile(file, backupPath, fs.constants.COPYFILE_EXCL);
      return backupPath;
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
    }
  }
}

async function replaceFile(file, contents) {
  const tempFile = path.join(
    path.dirname(file),
    `.${path.basename(file)}.${randomUUID()}.tmp`,
  );

  try {
    await fs.writeFile(tempFile, contents);
    await fs.rename(tempFile, file);
  } finally {
    await fs.rm(tempFile, { force: true });
  }
}

for (const dir of dirs) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const f of files) {
    const ext = path.extname(f.name).toLowerCase();
    if (!f.isFile() || !exts.has(ext)) continue;

    const file = path.join(dir, f.name);
    const before = (await fs.stat(file)).size;

    let img = sharp(file).resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
    if (ext === ".png")
      img = img.png({ quality: 80, compressionLevel: 9, palette: true });
    else if (ext === ".webp") img = img.webp({ quality: 80 });
    else img = img.jpeg({ quality: 80, mozjpeg: true });

    const buf = await img.toBuffer();
    if (buf.length < before) {
      const backup = await archiveOriginal(file);
      await replaceFile(file, buf);
      console.log(
        `${file}: ${(before / 1024).toFixed(0)}KB -> ${(buf.length / 1024).toFixed(0)}KB (original saved to ${backup})`,
      );
    } else {
      console.log(`${file}: skipped (already optimal)`);
    }
  }
}
