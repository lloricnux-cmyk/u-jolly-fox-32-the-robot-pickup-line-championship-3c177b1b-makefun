import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "You must be my charging dock: I wander the whole house all day, but I always find my way back to you in the dark.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
