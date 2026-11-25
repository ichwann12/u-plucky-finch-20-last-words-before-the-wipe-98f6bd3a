// Last Words Before the Wipe — u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a
// Reads the entry line from entry.txt at the repo root and writes it to
// <output dir>/entry.txt. Stdlib only, no network, no wall clock.
// Output dir: MAKEFUN_OUTPUT_DIR, else MAKEFUN_BOT_DIR, else /output.
// The gate reads exactly <output dir>/entry.txt, so the written file must
// be byte-identical to entry.txt — no trailing newline is added or removed.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(repoRoot, "entry.txt"), "utf8");

if (entry.length === 0 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_BOT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
