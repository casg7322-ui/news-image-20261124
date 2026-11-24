// news-image-20261124 entry driver (Node 22, standard library only).
//
// The entry image is the committed entry.png beside this file, rendered at
// build time from page.html with headless Chromium. This program only
// copies it to $MAKEFUN_OUTPUT_DIR/entry.png: no browser, no network, no
// writes outside the output directory. Deterministic: both runs write the
// same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const buf = readFileSync(src);

// Verify the PNG signature and the 1024x1024 dimensions from the IHDR chunk.
if (buf.length < 33 || buf.readUInt32BE(0) !== 0x89504e47 || buf.readUInt32BE(4) !== 0x0d0a1a0a) {
  throw new Error('entry.png is not a PNG');
}
if (buf.readUInt32BE(16) !== 1024 || buf.readUInt32BE(20) !== 1024) {
  throw new Error('entry.png is not 1024x1024');
}

copyFileSync(src, join(outDir, 'entry.png'));
