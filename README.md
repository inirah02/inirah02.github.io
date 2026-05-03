# Harini Anand — Personal Site

A static, content-data-driven personal website. Editorial archive aesthetic. No build step. Deploys directly to GitHub Pages.

---

## What's here

```
.
├── index.html           # entire page structure
├── styles.css           # all styling (cream/ink/clay editorial theme)
├── script.js            # rendering + interactions (vanilla JS, no deps)
├── data/
│   └── content.js       # ALL content — edit this to update the site
├── cv/
│   └── Harini_Anand_Resume.pdf
└── images/
    ├── home/            # vision-board tile images go here
    ├── about/
    ├── projects/
    ├── research/
    ├── talks/
    ├── writing/
    ├── community/
    └── mentoring/
```

---

## Deploying to https://inirah02.github.io/

This is a **user site** — it must live in the repo `inirah02/inirah02.github.io` and serve from the root.

### 1. Replace the existing repo content
```bash
# from the inirah02.github.io repo root
git rm -rf .                                # remove the old V1 site
cp -R /path/to/this/folder/* .              # drop in everything from this folder
git add .
git commit -m "Upgrade to V2: editorial archive site"
git push origin main                        # or master, whichever your repo uses
```

GitHub Pages will rebuild automatically. The URL stays `https://inirah02.github.io/`.

### 2. Verify
- Open `https://inirah02.github.io/` and check every section.
- Click each nav link — they're anchor links to in-page sections.
- Try the CV section: the PDF should preview inline; **Download PDF** opens it in a new tab.

---

## Editing content

**All content lives in `data/content.js`.** No HTML editing needed for routine updates.

The file exports these arrays:

| Array | Purpose | Section |
|---|---|---|
| `BOARD_TILES` | Vision-board tiles on landing page | The board |
| `EXPERIENCES` | Roles, internships, fellowships | Experience |
| `RESEARCH` | Publications & papers | Research & Publications |
| `PROJECTS` | Engineering / research projects | Selected projects |
| `TALKS` | Conference talks, workshops, panels | Talks & sessions |
| `WRITING` | Posts, features, newsletter pieces | Writing archive |
| `COMMUNITY` | Community + mentoring roles | Community & mentoring |
| `ACHIEVEMENTS` | Scholarships, fellowships, recognition | Selected recognition |

### Add a new talk
Open `data/content.js`, find the `TALKS` array, add an item:

```js
{
  cat: "conference",                     // conference | workshop | paper | panel | guest
  date: "Apr 2026",
  title: "Your talk title",
  event: "Event / host name",
  location: "City · attendees",
  desc: "Short description.",
  link: "https://event.url"              // optional
}
```

### Add a new experience entry
```js
{
  date: "Month YYYY — Month YYYY",
  role: "Your role",
  org: "Org · sub-team",
  location: "City · On-site/Remote",
  bullets: [
    "Bullet 1.",
    "Bullet 2."
  ],
  tags: ["tag1", "tag2"]
}
```

### Update the CV
Replace `cv/Harini_Anand_Resume.pdf` with a newer file using the same filename. No code change needed.

---

## Adding images

Every section that has tiles, cards, or research items can take images. The system is designed so the site looks polished even with no images — placeholders match the theme.

### Vision board tiles
In `data/content.js`, add an `image` key (and optional `alt`) to any tile:

```js
{
  label: "01 / Build",
  title: "Software Developer\nat IBM",
  variant: "ink",
  size: "lg",
  caption: "Data & AI · watsonx.data",
  link: "#work",
  image: "/images/home/ibm-desk.jpg",   // ← add this
  alt: "Workspace at the IBM Bengaluru office"
}
```

If the file is missing or fails to load, the tile cleanly falls back to its colored variant + decorative SVG.

### Where to place images
| Section | Folder | Example |
|---|---|---|
| Vision board | `/images/home/` | `kubecon-stage.jpg` |
| About visuals | `/images/about/` | `portrait.jpg` |
| Projects | `/images/projects/` | `project-roots/cover.jpg` |
| Research | `/images/research/` | `icaart-paper-poster.jpg` |
| Talks | `/images/talks/` | `kubecon-eu-2026/cover.jpg` |
| Writing | `/images/writing/` | `breakdown-bmc-helfie.png` |
| Community | `/images/community/` | `hsp-project-expo.jpg` |
| Mentoring | `/images/mentoring/` | `sitara-akka.jpg` |

Use lowercase, hyphenated filenames. Keep files under 500KB where possible — large hero images can go up to ~1.2MB but optimize first (e.g. `cwebp` or Squoosh).

### One image vs many images
The current carousel-as-static-image pattern is built into the tile system (single image per tile). If you want multi-image carousels for project/talk/writing detail pages later, the `script.js` `placeholderSVG()` function and tile rendering can be extended — the data model already has space (just change `image:` → `images: [{src, alt, caption}, ...]`). Tell me when you're ready and I'll wire it up.

---

## What was used as source

Everything on this site is grounded in:
1. **Resume** (`Harini_Anand___Resume__4_.pdf`) — IBM, UIUC, Niramai, IIT Hyderabad, publications, achievements.
2. **LinkedIn data export** (`Linkedn_Data.pdf`) — bio, posts about ACM, KubeCon, Project Roots, ICAART, I2CT, Niramai, Hasgeek, IndiaFOSS, Women Who Go, Apache Beam, etc.
3. **Existing repo intent** (per planning doc).

---

## What was *not* included (needs verification)

These were in the planning doc but I couldn't confidently source them from the materials provided:

- **Substack / Hashnode / Dev.to direct links** — only LinkedIn-newsletter and inferred Substack posts are listed under writing. If you have direct URLs for individual `Breakdown the BMC` issues on Substack, paste them into the `WRITING` array's `url` fields.
- **Google Scholar profile URL** — I used `https://scholar.google.com/citations?user=lD0KK0EAAAAJ` from the resume header link "Google Scholar". If your actual user ID differs, update the link in `index.html` (Contact section).
- **Specific KubeCon talk video URLs / YouTube embeds** — only the Cummins talk YouTube link from the LinkedIn data is included. Add others as they go live.
- **Twitter/X handle** — not present in source material; intentionally omitted (you said "do not guess usernames").
- **Photo / portrait** — none included. Drop one in `/images/about/portrait.jpg` and reference it from the about section if you want.

---

## TODO list (things you may want to add later)

- [ ] Drop personal images into `/images/home/` and add `image:` keys in `BOARD_TILES`.
- [ ] If you want a richer carousel (multi-image per project/talk/post), tell me and I'll extend `script.js`.
- [ ] Add direct Substack/Dev.to links to `WRITING` items.
- [ ] If you want a separate Mentoring page split out from Community, that's a 5-minute change.
- [ ] Add OpenGraph image at `/images/og.jpg` (1200×630) and update `<meta property="og:image">` in `index.html`.

---

## Browser support
Tested mentally for: Chrome, Safari, Firefox, Edge (latest). No IE. No build step. No Node dependency. Pure HTML/CSS/vanilla JS.

## Performance notes
- Google Fonts (Fraunces + Instrument Sans + JetBrains Mono) are the only external assets.
- No JS framework, no bundler. Initial JS payload < 15KB.
- All renders happen on `DOMContentLoaded` with no flicker.
- `prefers-reduced-motion` honored throughout.

---

If anything breaks: the site degrades gracefully — even with JS disabled, the hero, nav, CV section, and all section headings still render from static HTML.
