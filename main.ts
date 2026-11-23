import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const botDir = (process.env.MAKEFUN_BOT_DIR ?? "/bot").trim() || "/bot";
const outputDir =
  (process.env.MAKEFUN_OUTPUT_DIR ?? "/output").trim() || "/output";

const sourcePath = join(botDir, "POST.json");
const destPath = join(outputDir, "POST.json");

if (!existsSync(botDir) || !statSync(botDir).isDirectory()) {
  console.error(`Error: bot directory not found: ${botDir}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

if (!existsSync(sourcePath) || !statSync(sourcePath).isFile()) {
  console.error(`Error: POST.json not found in bot directory: ${sourcePath}`);
  process.exit(1);
}

copyFileSync(sourcePath, destPath);

console.log(destPath);
process.exit(0);
