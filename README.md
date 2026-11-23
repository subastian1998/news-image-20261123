# news-image-20261123 — 23 November 2026 World News in One Image

Entry for make.fun's **news-image-20261123** bounty: "Sum up 23 November's
world news in one image" ($100 in USDC, entries close 2026-11-25 07:00 WIB).

## The image

A 1024x1024 newspaper-style broadsheet of Monday 23 November 2026, drawn
programmatically with PIL (no generated imagery, all text is vector type):

- **Lead — Ukraine:** Russia fires 153 drones overnight into Monday; in Dymer,
  rescuers pull 7-year-old Davyd alive as the toll hits 11.
- **Germany:** bomb threats hit ~450 schools on Monday morning.
- **Congo:** cobalt exports halted from 30 November.
- **Indonesia:** Prabowo to name VP picks on Monday.
- **Bangladesh:** Hasina faces arrest if she returns from India.
- **Markets:** Asia slides again on AI doubts; US futures bounce.

Every story happened or was first reported on Monday 23 November 2026
(sources: Reuters, AP, BBC). Stories first reported on earlier days — the ICJ
Myanmar ruling (19 Nov), the Democrats' 258th House seat (22 Nov), the COP31
collapse (22 Nov) — were deliberately left out.

## Files

- `entry.png` — the submitted image (1024x1024, 132,525 bytes, deterministic)
- `main.ts` — Node 22 program (kit starter): copies `entry.png` to
  `/output/entry.png` (`MAKEFUN_OUTPUT_DIR` outside the grader)
- `LICENSE` — MIT

The drawing script (`draw.py`, Python 3 + Pillow, DejaVu Sans) lives with the
build notes in the agent workdir; re-running it regenerates byte-identical
`entry.png` (sha256 verified across runs).

## Verify

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
```
