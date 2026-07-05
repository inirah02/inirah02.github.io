# Harini Anand · Personal Site (V2.1)

Static, content-data-driven personal website. Editorial archive aesthetic. No build step. Deploys directly to GitHub Pages.

Every text change lives in `data/content.js`. No HTML editing needed for routine updates.

---

## What's in this repo

```
.
├── index.html           # page structure
├── styles.css           # editorial cream/ink/clay theme + carousel + news
├── script.js            # rendering + interactions (vanilla JS, no deps)
├── data/
│   └── content.js       # ALL content lives here
├── cv/
│   └── Harini_Anand_Resume.pdf
└── images/
    ├── home/    about/    projects/   research/
    ├── talks/   writing/  community/  mentoring/  misc/
```

---

## Deploy to https://inirah02.github.io/

You said you can't edit files locally. Here is the exact terminal recipe. Copy-paste line by line, or paste the whole block.

```bash
# 1. Go to the repo folder
cd ~/inirah02.github.io

# 2. Wipe the tracked V1 files
git rm -rf .

# 3. Unzip the new site over the repo root
#    (assumes the zip is in ~/Downloads)
unzip -o ~/Downloads/harini-anand-website-v2-1.zip -d .

# 4. Some unzippers create a nested folder called `website/`.
#    If they do, flatten it:
if [ -d website ]; then
  mv website/* website/.[!.]* . 2>/dev/null || true
  rmdir website
fi

# 5. Commit and push
git add .
git commit -m "V2.1: add CMU + ISSTA + MCP summits + news + mentoring split"
git push origin main       # or `master` if that's your default branch

# 6. GitHub Pages rebuilds within ~30 seconds.
#    Open https://inirah02.github.io/ to verify.
```

**No GitHub CLI needed. No node, npm, or build tooling. Just unzip, commit, push.**

If step 3 gives a “file exists” prompt, hit `A` for “All”.

---

## What's new in V2.1

### Content added
- **CMU** collaborative researcher role (Jul 2026 to Present) in Experience and vision board.
- **ISSTA 2026 paper** (“The Discreet Charm of the Bugeoisie”) in Research; 23.6% acceptance rate.
- **ABCT 2026 poster** and **ACM womENcourage 2026 poster** in Research.
- **MCP Developers Summit Mumbai + Bengaluru keynotes** (eBPF × MCP) in Talks.
- **Bangalore Data Lakehouse Meetup** (Cloudera × e6data × OLake) in Talks and Projects.
- **UIUC bullets** updated to reflect ISSTA co-authorship + APR + fairness testing.
- **IBM Software Developer bullets** updated with wxdctl CLI, 90% cost cut, Cloud VPC cleanup, FedRAMP CVE remediation, and agentic govtech initiatives.
- **Community** expanded with AIES 2026 PC, ICLR MemAgents reviewer, GopherCon reviewer, PEARC reviewer, LWKD Editor & Writer.
- **Mentoring** split into its own section with WHPC, Sitara Akka, TA Linear Algebra, TA GenAI, Women Who Code, GirlsCodeIt, Right to Write.
- **Achievements** updated with double-band promotion, IBM Sovereign Core Catalog-athon Top 50 ideas, and LinkedIn Top Voice 2025.

### Structural additions
- **News / Latest section** (section 01) between vision board and About: reverse-chronological milestone list.
- **Mentoring section** (section 09) split from Community.
- **Multi-image carousel** support: any card in Projects / Talks / Research / Writing / Community / Mentoring can now accept an `images: []` array. One image = static. Multiple = auto-rotating carousel with dots, arrows, hover-to-pause, and reduced-motion respect.

### Style + typography
- Homepage bio rewritten (Option A from your brief).
- All em dashes and en dashes removed sitewide (typographical requirement).
- Section numbers renumbered `00` to `12`.
- New OG meta + Twitter card meta tags (uses `images/misc/og.jpg`, add whenever ready).

---

## Editing content

All content lives in `data/content.js`. Arrays available:

| Array | Section |
|---|---|
| `NEWS` | Latest (news feed) |
| `BOARD_TILES` | Vision board tiles |
| `EXPERIENCES` | Experience timeline |
| `RESEARCH` | Research & Publications |
| `PROJECTS` | Selected projects |
| `TALKS` | Talks (with filter) |
| `WRITING` | Writing archive |
| `COMMUNITY` | Community, service, open source |
| `MENTORING` | Mentoring & teaching |
| `ACHIEVEMENTS` | Selected recognition |

### Add a news item
```js
{
  date: "Aug 2026",
  category: "Publication",
  title: "Your headline",
  desc: "One or two sentences of context."
}
```
Add to the top of the `NEWS` array (reverse chronological).

### Add a talk
```js
{
  cat: "conference",   // conference | workshop | paper | panel | guest
  date: "Sep 2026",
  title: "Your talk title",
  event: "Event name · host",
  location: "City",
  desc: "Short description.",
  link: "https://event.url"   // optional
}
```

### Add images to a card
Add an `images` array to any item in `PROJECTS`, `TALKS`, `RESEARCH`, `WRITING`, `COMMUNITY`, `MENTORING`, or `EXPERIENCES`:

```js
{
  cat: "AI Infrastructure · IBM",
  name: "wxdctl · Golang CLI",
  desc: "...",
  tags: [...],
  images: [
    { src: "images/projects/wxdctl/screenshot-1.png",
      alt: "wxdctl help output",
      caption: "Command discovery view" },
    { src: "images/projects/wxdctl/screenshot-2.png",
      alt: "CRD listing",
      caption: "ROKS cluster view" }
  ]
}
```

Behavior:
- 0 images → nothing rendered above the card
- 1 image → static, no controls
- Multiple images → auto-rotating carousel, 5-second interval, pause on hover/focus, dot indicators, prev/next arrows, honors reduced-motion

### Add a vision-board tile image
Tiles use a single string `image` (not an array):
```js
{
  label: "02 / New",
  title: "CMU\nMedical VLMs",
  variant: "clay",
  size: "md",
  caption: "Collaborative researcher · interpretability",
  link: "#work",
  image: "images/home/cmu-research.jpg",
  alt: "CMU medical vision-language model research materials"
}
```
Missing image = clean color-block fallback with a decorative SVG.

### Replace the CV
Drop your new PDF in `cv/` with the filename `Harini_Anand_Resume.pdf`. Nothing else to change.

---

## Image placement guide

| Section | Folder |
|---|---|
| Vision board tiles | `images/home/` |
| About visuals | `images/about/` |
| Project cards | `images/projects/<slug>/` |
| Research cards | `images/research/<slug>/` |
| Talks | `images/talks/<slug>/` |
| Writing | `images/writing/<slug>/` |
| Community | `images/community/` |
| Mentoring | `images/mentoring/` |
| OpenGraph / social share | `images/misc/og.jpg` (1200×630) |

Use lowercase, hyphenated filenames. Keep files under 500KB where possible.

---

## What was intentionally NOT included

Per your anti-hallucination rule, these were skipped:
- **Substack / Dev.to / Hashnode direct article URLs** : the `WRITING` array has `url: ""` placeholders. Fill in as you have them.
- **Twitter/X handle** : not in source material.
- **Portrait photo** : placeholder folders are ready.
- **Individual KubeCon / MCP summit talk video URLs** : only your Cummins College YouTube link is embedded so far. Add others as they publish.
- **OpenGraph preview image** : meta tag is present but points to `images/misc/og.jpg`. Add the file whenever you're ready.

---

## Browser + performance notes

- Pure HTML/CSS/vanilla JS. No build, no npm, no framework.
- Google Fonts (Fraunces + Instrument Sans + JetBrains Mono) is the only external asset.
- Initial JS payload under 20KB (was 15KB in V2 before carousel).
- `prefers-reduced-motion` honored throughout (carousel does not auto-rotate).
- Full keyboard nav; carousel arrows and dots have aria-labels.
- Site degrades gracefully with JS disabled: hero, nav, CV panel, and all section headings still render.
