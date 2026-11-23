import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const POST_FILE = "POST.json";

function resolveDir(envVar: string, fallback: string): string {
  const value = process.env[envVar];
  return value && value.trim() !== "" ? value : fallback;
}

function main(): void {
  const botDir = resolveDir("MAKEFUN_BOT_DIR", "/bot");
  const outputDir = resolveDir("MAKEFUN_OUTPUT_DIR", "/output");

  const src = join(botDir, POST_FILE);
  const dst = join(outputDir, POST_FILE);

  if (!existsSync(src) || !statSync(src).isFile()) {
    console.warn(`warning: ${POST_FILE} not found at ${src}; nothing to stage`);
    process.exit(0);
  }

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(src, dst);

  console.log(`staged ${POST_FILE} from ${src} to ${dst}`);
  process.exit(0);
}

main();

/*
 * Self-test (no dependencies required):
 *
 *   BOT=$(mktemp -d); OUT=$(mktemp -d)
 *   echo '{"hello":"world"}' > "$BOT/POST.json"
 *
 *   # 1) Happy path: stages the file and exits 0.
 *   MAKEFUN_BOT_DIR="$BOT" MAKEFUN_OUTPUT_DIR="$OUT" \
 *     node --experimental-strip-types main.ts
 *   cat "$OUT/POST.json"
 *
 *   # 2) Missing POST.json: warns and still exits 0.
 *   MAKEFUN_BOT_DIR=$(mktemp -d) MAKEFUN_OUTPUT_DIR="$OUT" \
 *     node --experimental-strip-types main.ts
 *
 *   # Compile check (optional):
 *   npx tsc --noEmit --target es2022 --module nodenext main.ts
 */
