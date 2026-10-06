# AGENTS.md — GoxEDGE.com Companion Resource Site

Working rules for anyone (human or agent) editing the goxedge.com codebase.

---

## Project context

**goxedge.com** is the official book and method companion site for **《出海新势力》** and the **GoxEDGE 全球拓展战略模型** (author: 何敏, publisher: 机械工业出版社). The line “从走出去到走下去” is the tagline, not the book title.

**GoxEDGE** is the strategic model / method brand **inside the book** — the **GoxEDGE 全球拓展战略模型**. It is **not** the book title. goxedge.com is not a SaaS product, a consulting sales funnel, or a GILTCO ecosystem site.

Editorial source of truth for model and book semantics is the latest finalized manuscript of 《出海新势力》. The verified baseline for this site freeze is **出海新势力_GoxEDGE_V40.0.0_定稿**. That manuscript is not stored in this repository; do not invent a repo path for it.

**Existing website copy is not the source of truth.** Align public content with that manuscript. Do not treat older website screenshots or older replica comments as authoritative.

Current target phase: **`release-ready`** — polished and publication-ready; final assets (ISBN, cover, purchase links, QR, downloads) may still be placeholders.

---

## Correct naming

| Use | Do not use |
|-----|------------|
| 《出海新势力》 | 《出海战略》, 《GoxEDGE》 |
| GoxEDGE 全球拓展战略模型 | GoxEDGE as the book title |
| 从走出去到走下去 | as the book title |
| 《出海新势力》官方书籍与方法配套站 | |

**GoxEDGE** in nav/brand mark = model site identity at goxedge.com, not book title.

---

## Public positioning

The site supports book launch and reader follow-up:

- Book introduction
- GoxEDGE model explanation
- Companion resources (charts, appendices, reader guides)
- Chapter reading guidance
- iSeeWorlds author updates
- Low-key reader / media / enterprise discussion contact

It must **not** feel like a SaaS product, AI tool, consulting sales funnel, or GILTCO ecosystem site.

---

## Primary navigation (release-ready)

首页 · 图书 · 模型 · 章节 · 资源 · 问答 · 联系 · 关于

**Do not show:** GILTOS Demo, GILTCO ecosystem, GoxGlobe, case library, certification, academy, SaaS platform links.

---

## Config files

| File | Purpose |
|------|---------|
| `assets/js/book-config.js` | `BOOK_CONFIG` — titles, author, publisher, purchase links, iSeeWorlds values, cover |
| `assets/js/site-config.js` | `SITE_CONFIG` — `launchPhase` and `show*` flags |
| `assets/js/resources-config.js` | Resource catalog (8 approved categories) |
| `assets/js/chapters-config.js` | Reading paths and table of contents |

`assets/js/site-phase.js` applies flags on load — no build step.

### Release-ready flags (default)

```
launchPhase: 'release-ready'
showBookDetails: true
showFrameworkShort: false
showFullFramework: true
showResourcePreview: true
showChapterGuide: true
showChartIndex: true
showMinvistaSection: true
showEnterpriseInquiry: true
showTools: false
showCaseLibrary: false
showGiltosDemo: false
showPurchaseLinks: true
showDownloads: false
showMinvistaCTA: true
showContactCTA: true
```

Book publication does not automatically enable Tools, the Case Library, or Downloads. Those feature flags stay independent and must be confirmed on their own.

---

## Do not invent

- ISBN, publication date, cover image path
- Purchase links (JD, Dangdang, ebook, WeChat Reading)
- iSeeWorlds QR code image (do not invent one; hide the QR if the asset is missing)
- Download file URLs
- Testimonials, recommendation names
- Fake case study pages or company logos

Empty fields show graceful placeholders: 即将更新, 随书更新, 购买链接将在正式上架后更新, 二维码即将更新.

---

## Product boundaries

1. **GoxEDGE** — Model / method brand inside 《出海新势力》.
2. **GILTOS** — Hidden (`showGiltosDemo: false`). No demo CTAs in HTML or nav.
3. **GILTCO / GoxGlobe** — No public relationship on goxedge.com.
4. **新见界 · iSeeWorlds** — Author's personal content and professional site. Legacy JS keys may still use the `minvista` prefix.
5. **Cases** — No public case library. `/cases/` stays unavailable and explains that book cases are not a public library.
6. **Tools** — No public tool entry. `/tools/` stays unavailable. Companion tools are not part of book launch.

---

## Copy and tone

Professional, restrained, publication-ready, method-oriented, reader-service-oriented.

Avoid: AI hype, SaaS language, consulting buzzwords, urgency tricks, overpromising downloads.

---

## Launch-day checklist

Required for book launch. Edit `book-config.js` when confirmed:

- [ ] `publicationStatus`, `publicationDate`, `isbn`, `coverImage`
- [ ] `jdLink`, `dangdangLink`, `ebookLink`, `wechatReadingLink` — confirmed retailer URLs only
- [ ] `sitemap.xml` verified
- [ ] `robots.txt` checked
- [ ] `SITE_CONFIG.launchPhase` → `launch`

Optional, and independent of publication:

- [ ] `SITE_CONFIG.showDownloads` → true only when real files and rights are confirmed
- [ ] `SITE_CONFIG.showTools` → true only when specific companion tools are ready
- [ ] `SITE_CONFIG.showCaseLibrary` stays false under the current public strategy

Publishing the book does not turn on tools, the case library, or downloads.

---

## Technical notes

- Static HTML + `assets/css/styles.css` + JS configs. GitHub Pages; `CNAME` → goxedge.com.
- Batch-update nav/footer across ~17 HTML files when changing chrome.
- Preserve prelaunch blocks (`data-site-prelaunch-only`) for phase reversibility.

---

## When in doubt

Default to **less exposure**. Do not use GoxEDGE as the book title. Do not expose GILTOS or invent publication assets.
