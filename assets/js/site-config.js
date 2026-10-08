/**

 * GoxEDGE.com launch phase configuration.

 *

 * Phases: prelaunch | release-ready | launch

 * launchPhase is the publication / site phase. Feature readiness is independent.

 * Publishing the book does not automatically mean every future companion feature is ready for public release.

 * Edit launchPhase and show* flags here to switch site modes.

 * See presets and launch-day checklist at the bottom of this file.

 *

 * Homepage section flags (index.html):

 *   showBookDetails         — Book details block + /book/ page

 *   showFrameworkShort      — Short framework (prelaunch / early preview)

 *   showFullFramework       — Full GoxEDGE model + /model/ page

 *   showResourcePreview     — Companion resource types (available / coming soon)

 *   showChapterGuide        — Chapter reading paths + /chapters/ page

 *   showChartIndex          — Chart / appendix index resources

 *   showMinvistaSection     — Minvista update channel block

 *   showEnterpriseInquiry   — Low-key enterprise / reader inquiry

 *   showPurchaseLinks       — Purchase link placeholders (no URLs until confirmed)

 *   showDownloads           — Real downloadable files only. False until files and rights are confirmed. Not required for book launch.

 *

 * Deep-site flags:

 *   showTools               — Future companion tools. False until specific tools are ready. Not required for book launch.

 *   showCaseLibrary         — Public case library. Keep false under the current strategy. Not required for book launch.

 *   showGiltosDemo          — GILTOS demo links (keep false)

 *

 * Legacy aliases (still honored in site-phase.js):

 *   showChapterMapping → showChapterGuide

 *   showCases → showCaseLibrary

 *

 * Book launch data: assets/js/book-config.js (BOOK_CONFIG)

 */



var SITE_CONFIG = {

  launchPhase: 'release-ready',



  showBookDetails: true,

  showFrameworkShort: false,

  showFullFramework: true,

  showResourcePreview: true,

  showChapterGuide: true,

  showChartIndex: true,

  showMinvistaSection: true,

  showEnterpriseInquiry: true,



  showTools: false,

  showCaseLibrary: false,

  showGiltosDemo: false,

  showPurchaseLinks: true,

  showDownloads: false,



  showMinvistaCTA: true,

  showContactCTA: true,



  minvistaCTAUrl: 'https://iseeworlds.com/?utm_source=goxedge&utm_medium=referral&utm_campaign=ecosystem',

  minvistaCTALabel: '访问新见界 · iSeeWorlds',

  contactCTALabel: '联系作者'

};



/*

 * --- prelaunch preset ---

 *

 * launchPhase: 'prelaunch',

 * showBookDetails: false,

 * showFrameworkShort: false,

 * showFullFramework: false,

 * showResourcePreview: false,

 * showChapterGuide: false,

 * showChartIndex: false,

 * showMinvistaSection: false,

 * showEnterpriseInquiry: false,

 * showTools: false,

 * showCaseLibrary: false,

 * showGiltosDemo: false,

 * showPurchaseLinks: false,

 * showDownloads: false,

 * showMinvistaCTA: true,

 * showContactCTA: true,

 *

 * --- release-ready preset (current default) ---

 *

 * launchPhase: 'release-ready',

 * showBookDetails: true,

 * showFrameworkShort: false,

 * showFullFramework: true,

 * showResourcePreview: true,

 * showChapterGuide: true,

 * showChartIndex: true,

 * showMinvistaSection: true,

 * showEnterpriseInquiry: true,

 * showTools: false,

 * showCaseLibrary: false,

 * showGiltosDemo: false,

 * showPurchaseLinks: true,

 * showDownloads: false,

 * showMinvistaCTA: true,

 * showContactCTA: true,

 *

 * --- launch preset (book publication; tools, cases, and downloads stay off) ---

 *

 * launchPhase: 'launch',

 * showBookDetails: true,

 * showFrameworkShort: false,

 * showFullFramework: true,

 * showResourcePreview: true,

 * showChapterGuide: true,

 * showChartIndex: true,

 * showMinvistaSection: true,

 * showEnterpriseInquiry: true,

 * showTools: false,

 * showCaseLibrary: false,

 * showGiltosDemo: false,

 * showPurchaseLinks: true,

 * showDownloads: false,

 * showMinvistaCTA: true,

 * showContactCTA: true,

 *

 * Book launch does not turn on tools, the case library, or downloads.

 *

 * --- Required for book launch ---

 *

 * [ ] BOOK_CONFIG.publicationStatus — confirm the live publication wording

 * [ ] BOOK_CONFIG.publicationDate — set when confirmed

 * [ ] BOOK_CONFIG.isbn — set when confirmed

 * [ ] BOOK_CONFIG.coverImage — upload the final cover, set path

 * [ ] BOOK_CONFIG.jdLink / dangdangLink / ebookLink / wechatReadingLink — confirmed retailer URLs only

 * [ ] sitemap.xml — verify all public routes

 * [ ] robots.txt — remove any Disallow rules if added for prelaunch

 * [ ] SITE_CONFIG.launchPhase — 'launch' when the book is publicly published

 *

 * --- Optional and independent of book launch ---

 *

 * [ ] SITE_CONFIG.showDownloads — true only when real files and rights are confirmed

 * [ ] SITE_CONFIG.showTools — true only when specific companion tools are ready

 * [ ] SITE_CONFIG.showCaseLibrary — remains false under the current public strategy

 *

 * These optional flags are not required to publish the book.

 */


