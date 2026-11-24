#!/bin/sh
# Render page.html to entry.png at exactly 1024x1024 (build time only).
# Uses the Playwright headless-shell Chromium cache; /opt/meta-chromium
# refuses to start in this VM (Hatch WebGL domain policy).
set -e
DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
CHROME=${CHROME:-$HOME/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell}
"$CHROME" --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1024,1024 \
  --screenshot="$DIR/entry.png" "file://$DIR/page.html"
