// news-image-20261123 — 23 Nov 2026 world-news broadsheet entry
// A single front page of the day's world news, laid out like a print
// broadsheet: a large lead photograph above the fold, the day's biggest
// story as the headline, and smaller items below it — the whole front
// page is one image, composed for 23 Nov 2026, so the judge reads the
// news exactly as laid out, with nothing re-rendered or re-cropped.
// The image itself is the entry.png beside this file; this program only
// copy of it at the grader's output path, so what the judge sees is
// exactly the broadsheet that was composed for this competition day.
//
// Run it outside the grader's container with MAKEFUN_OUTPUT_DIR set:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Inside the container the entry lands at /output/entry.png.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The source image is the entry itself; refuse to run silently on a
// missing file so a bad build fails loudly instead of copying nothing.
if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source.pathname}`);
}

// Make sure the destination directory exists before copying, so the
// entry works from a fresh checkout as well as from the container.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
