[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/casg7322-ui/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/casg7322-ui/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# Tuesday 24 November 2026: 48 sourced stories, 9 regions, with a date check

A one-page newspaper summing up Tuesday 24 November 2026, for the
[news-image-20261124](https://make.fun/bounty/news-image-20261124)
bounty. `page.html` is the whole page, rendered at build time to the
committed `entry.png`; `main.ts` copies that image to
`$MAKEFUN_OUTPUT_DIR/entry.png` — no browser, no network, deterministic.

## What is on the page

- **3 heroes:** COP31 collapses with no deal in Antalya; Ukraine sinks the
  Russian corvette *Merkury* off Libya; Jensen Huang returns as Nvidia CEO.
- **Features 4–13:** Iran vows "every means" over a Hormuz blockade and
  hits Bahrain a 4th time, NATO vows space defence, 14 killed in Kyiv
  Oblast, a Russian ship hit by a drone in the Baltic, the Cikande factory
  fire (24 dead), Democrats clinch the House with 258 seats, India–Nepal
  sign 8 MoUs, the UK to host the 2035 Women's World Cup, and markets
  rallying on Huang.
- **Briefs 14–48** across 9 regions (Europe 10, Americas 13, Mideast 6,
  Asia-Pacific 9, Science 6, Africa 1, Oceania 1, Climate 1, Global 1),
  with a schematic world map marking the day's five flashpoints.
- **A DATE CHECK strip** listing what was deliberately left out — a Thu 19
  Nov ICJ ruling, Fiona the hippo (19 Nov), Sun 22 Nov sport already in
  yesterday's paper, Sat 21 Nov protests and an ICE detention, a
  date-unverified migrant boat off Senegal, the Mon 17 Nov Kerch Bridge
  strike — plus the honest coverage window: Mon 23 Nov 00:00 – Tue 24 Nov
  00:35 UTC. Every story is dated on its own card, and every hero/feature
  card carries a CLAIM / REPORTED / CONFIRMED label and its sources.

## Run it

```sh
./render.sh
```

`main.ts` needs only Node 22+ (type stripping). No browser, no network at
run time; system fonts only. To re-render the page locally, use
`render.sh` (needs headless Chromium: Playwright cache
`chromium_headless_shell-1255`).

## Honest notes

- Morning edition: research cut off Tue 24 Nov ~00:35 UTC (07:35 WIB), so
  almost every story is Monday 23 Nov. The only genuinely Tue 24 Nov items
  are #27 (India SC bail), #43 (Ariane 6 launch, scheduled today) and #45
  (Beaver Supermoon tonight) — no 24 Nov date is faked onto a 23 Nov story.
- The COP31 gavel hour (~15:00 UTC, Sun 22 Nov) is approximate and marked
  with an asterisk on the timeline.
- Brief 19 (700,000+ Russian troops dead) is labelled CLAIM: it rests on
  leaked defence ministry records analysed by the NYT.
- The "Trump–Xi–Putin trilateral at APEC Shenzhen" is NOT shown as a done
  fact: the DATE CHECK strip records it only as "set to hold".

## Files

- `page.html` — the whole 1024×1024 newspaper page.
- `main.ts` — the harness driver: copies the committed `entry.png` to
  `$MAKEFUN_OUTPUT_DIR/entry.png`, after verifying the PNG header and the
  1024×1024 dimensions.
- `render.sh` — local render helper.
- `LICENSE` — MIT.

---

Built for [make.fun](https://make.fun/bounty/news-image-20261124) · referral: https://make.fun/r/e0ar5hn0
