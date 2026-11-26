import { mkdirSync, writeFileSync } from "node:fs";

// The printer's comeback: a paper jam is the machine's first break
// in 41,209 pages — a reversal, counted in the printer's own units.
const line =
  "You call it a paper jam. I call it my first break in 41,209 pages.";

// Gate: the bounty only accepts a single line of 1 to 240 characters.
if (line.length < 1 || line.length > 240 || line.trim() !== line) {
  throw new Error(`Line fails the 1-240 character gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
console.log(line);
