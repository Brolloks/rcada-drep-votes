---
layout: null
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RCADA DRep Voting Record</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #080c14;
    --bg2: #0d1220;
    --bg3: #121828;
    --card: #0f1520;
    --banner: #0b1622;
    --banner-border: rgba(0,220,192,0.22);
    --border: rgba(0,220,190,0.12);
    --border-hover: rgba(0,220,190,0.32);
    --teal: #00dcc0;
    --teal-dim: rgba(0,220,192,0.08);
    --teal-glow: rgba(0,220,192,0.15);
    --text-primary: #e8edf5;
    --text-secondary: #a8b8c8;
    --text-dim: #6e8295;
    --yes: #00c896;
    --yes-bg: rgba(0,200,150,0.1);
    --no: #f04f5a;
    --no-bg: rgba(240,79,90,0.1);
    --abstain: #f5a623;
    --abstain-bg: rgba(245,166,35,0.1);
    --type-bg: rgba(59,130,246,0.1);
    --type: #6ba3f7;
    --mono: 'Space Mono', monospace;
    --sans: 'DM Sans', sans-serif;
    --radius: 10px;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text-primary);
    font-family: var(--sans);
    font-size: 15px;
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* dot grid background */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0,220,192,0.06) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
  }

  /* top ambient glow */
  body::after {
    content: '';
    position: fixed;
    top: -180px;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 400px;
    background: radial-gradient(ellipse at center, rgba(0,180,160,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .page-wrap {
    position: relative;
    z-index: 1;
    max-width: 840px;
    margin: 0 auto;
    padding: 0 1.5rem 5rem;
  }

  /* ── LOGO BANNER ── */
  .logo-banner {
    background: var(--banner);
    border-bottom: 1px solid var(--banner-border);
    margin: 0 -1.5rem 0;
    padding: 0 1.5rem;
    position: relative;
  }
  /* subtle teal left-edge glow on the banner */
  .logo-banner::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, var(--teal), transparent);
    opacity: 0.6;
  }
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 0;
    gap: 1rem;
  }
  .topbar-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .topbar-logo {
    height: 42px;
    width: auto;
    display: block;
    /* slight drop shadow so transparent logo edges show on dark bg */
    filter: drop-shadow(0 0 8px rgba(0,220,192,0.18));
  }
  .topbar-live {
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-dim);
    letter-spacing: 0.07em;
    border-left: 1px solid var(--border);
    padding-left: 14px;
  }
  .topbar-live .dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--teal);
    box-shadow: 0 0 8px var(--teal);
    animation: blink 2.2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes blink {
    0%,100% { opacity:1; box-shadow: 0 0 8px var(--teal); }
    50% { opacity:0.4; box-shadow: 0 0 3px var(--teal); }
  }
  .topbar-link {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-secondary);
    text-decoration: none;
    border: 1px solid var(--border);
    padding: 7px 14px;
    border-radius: 6px;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .topbar-link:hover { border-color: var(--teal); color: var(--teal); }

  /* ── HERO ── */
  .hero {
    padding: 3.5rem 0 2.5rem;
    border-bottom: 1px solid var(--border);
  }
  .hero-eyebrow {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.16em;
    color: var(--teal);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .hero h1 {
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-bottom: 1.25rem;
  }
  .hero h1 .accent { color: var(--teal); }
  .hero p {
    color: var(--text-secondary);
    max-width: 580px;
    font-size: 15px;
    line-height: 1.75;
  }
  .hero p + p { margin-top: 0.6rem; }

  /* ── STATS ── */
  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin: 2rem 0;
  }
  /* hide the raw markdown text the auto-script dumps between the markers */
  .stat-cell {
    background: var(--card);
    padding: 1.25rem 1rem;
    text-align: center;
    transition: background 0.2s;
  }
  .stat-cell:hover { background: var(--bg3); }
  .stat-num {
    font-family: var(--mono);
    font-size: 1.75rem;
    font-weight: 700;
    display: block;
    line-height: 1;
    margin-bottom: 6px;
  }
  .stat-num.total   { color: var(--text-primary); }
  .stat-num.yes     { color: var(--yes); }
  .stat-num.no      { color: var(--no); }
  .stat-num.abstain { color: var(--abstain); }
  .stat-label {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-secondary);
    font-family: var(--mono);
  }

  /* ── SECTION HEADER ── */
  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 2.5rem 0 1rem;
  }
  .section-header h2 {
    font-size: 11px;
    font-family: var(--mono);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-secondary);
    font-weight: 400;
    white-space: nowrap;
  }
  .section-header::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* ── NAV NOTICE ── */
  .nav-notice {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 18px;
    background: var(--teal-dim);
    border: 1px solid rgba(0,220,192,0.2);
    border-radius: var(--radius);
    margin-bottom: 1.5rem;
    font-size: 13px;
  }
  .nav-notice .icon { color: var(--teal); flex-shrink: 0; }
  .nav-notice a {
    color: var(--teal);
    text-decoration: none;
    font-family: var(--mono);
    font-size: 12px;
  }
  .nav-notice a:hover { text-decoration: underline; }
  .nav-notice-label { color: var(--text-secondary); margin-right: 4px; }

  /* ── VOTE CARDS ──
     Supports BOTH formats:
     1. Our <a class="vote-card yes-card"> with 3-column grid children
     2. Auto-script <div class="vote-card"> with date div + strong a + badges
  */
  .vote-list { display: flex; flex-direction: column; gap: 10px; }

  .vote-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1rem 1.25rem 1rem 1.4rem;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
    position: relative;
    overflow: hidden;
    display: block;
    color: var(--text-primary);
  }

  /* coloured left-bar — via explicit class OR :has() for auto-script cards */
  .vote-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    border-radius: 3px 0 0 3px;
  }
  .vote-card.yes-card::before,
  .vote-card:has(.badge-yes)::before     { background: var(--yes); }
  .vote-card.no-card::before,
  .vote-card:has(.badge-no)::before      { background: var(--no); }
  .vote-card.abstain-card::before,
  .vote-card:has(.badge-abstain)::before { background: var(--abstain); }

  .vote-card:hover {
    border-color: var(--border-hover);
    background: var(--bg3);
    transform: translateX(2px);
  }

  /* date — works for both <span class="vote-date"> and <div class="vote-date"> */
  .vote-date {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-dim);
    display: block;
    margin-bottom: 4px;
  }

  /* title — our format */
  .vote-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.4;
    display: block;
    margin-bottom: 8px;
  }

  /* title — auto-script format: <strong><a href>Title</a></strong> */
  .vote-card > strong,
  .vote-card strong {
    display: block;
    margin-bottom: 8px;
  }
  .vote-card > strong > a,
  .vote-card strong > a {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    text-decoration: none;
    line-height: 1.4;
  }
  .vote-card > strong > a:hover,
  .vote-card strong > a:hover { color: var(--teal); }

  /* badges row — works for both formats */
  .vote-badges {
    display: flex;
    gap: 6px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 6px;
  }

  /* auto-script puts badges directly in .vote-card after a <br>, flex them */
  .vote-card > .badge { display: inline-flex; margin-top: 6px; margin-right: 6px; }

  /* ── BADGES ── */
  .badge {
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 4px;
    white-space: nowrap;
  }
  .badge-yes     { background: var(--yes-bg);     color: var(--yes);     border: 1px solid rgba(0,200,150,0.25); }
  .badge-no      { background: var(--no-bg);      color: var(--no);      border: 1px solid rgba(240,79,90,0.25); }
  .badge-abstain { background: var(--abstain-bg); color: var(--abstain); border: 1px solid rgba(245,166,35,0.25); }
  .badge-type    { background: var(--type-bg);    color: var(--type);    border: 1px solid rgba(59,130,246,0.2); font-weight: 400; }

  /* ── INFO GRID ── */
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 1.5rem 0;
  }
  .info-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
  }
  .info-card h3 {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }
  .info-card ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .info-card li {
    font-size: 13px;
    color: var(--text-secondary);
    padding-left: 14px;
    position: relative;
    line-height: 1.5;
  }
  .info-card li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--teal);
    font-size: 10px;
    top: 3px;
  }

  .browse-links { display: flex; gap: 8px; flex-wrap: wrap; }
  .browse-link {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--teal);
    text-decoration: none;
    padding: 6px 14px;
    border: 1px solid rgba(0,220,192,0.2);
    border-radius: 6px;
    background: var(--teal-dim);
    transition: all 0.2s;
  }
  .browse-link:hover { border-color: var(--teal); background: var(--teal-glow); }

  .coverage-note {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1rem 1.25rem;
    font-size: 13px;
    color: var(--text-secondary);
    margin: 1.5rem 0;
    font-family: var(--mono);
    line-height: 1.7;
  }
  .coverage-note strong { color: var(--text-primary); }

  .footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-brand { font-family: var(--mono); font-size: 11px; color: var(--text-dim); letter-spacing: 0.08em; }
  .footer-chain { font-family: var(--mono); font-size: 11px; color: var(--text-dim); }
  .footer-chain span { color: var(--teal); }

  /* staggered card animation */
  .fade-in { opacity: 0; transform: translateY(10px); animation: fadeUp 0.45s ease forwards; }
  @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }
  .vote-list .vote-card:nth-child(1)  { animation-delay: 0.04s; }
  .vote-list .vote-card:nth-child(2)  { animation-delay: 0.08s; }
  .vote-list .vote-card:nth-child(3)  { animation-delay: 0.12s; }
  .vote-list .vote-card:nth-child(4)  { animation-delay: 0.16s; }
  .vote-list .vote-card:nth-child(5)  { animation-delay: 0.20s; }
  .vote-list .vote-card:nth-child(6)  { animation-delay: 0.24s; }
  .vote-list .vote-card:nth-child(7)  { animation-delay: 0.28s; }
  .vote-list .vote-card:nth-child(8)  { animation-delay: 0.32s; }
  .vote-list .vote-card:nth-child(9)  { animation-delay: 0.36s; }
  .vote-list .vote-card:nth-child(10) { animation-delay: 0.40s; }

  @media (max-width: 620px) {
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .info-grid { grid-template-columns: 1fr; }
    .topbar-live { display: none; }
  }
</style>
</head>
<body>

<!-- full-width logo banner -->
<div class="logo-banner">
  <div class="page-wrap" style="padding-top:0; padding-bottom:0;">
    <nav class="topbar">
      <div class="topbar-left">
        <img class="topbar-logo"
             src="assets/RCADA DREP LOGO.png"
             alt="RCADA DRep Logo">
        <div class="topbar-live">
          <span class="dot"></span>
          On-chain
        </div>
      </div>
      <a class="topbar-link" href="RCADA_GOVERNANCE_POLICY.html">Governance Policy →</a>
    </nav>
  </div>
</div>

<div class="page-wrap">

  <!-- HERO -->
  <header class="hero">
    <p class="hero-eyebrow">On-chain governance · Cardano</p>
    <h1>RCADA <span class="accent">DRep</span><br>Voting Record</h1>
    <p>RCADA represents delegators through a Constitution-first, transparent, and sustainability-focused approach to governance.</p>
    <p>This is the public record of RCADA's governance activity since late 2025, including full vote rationales and structured analysis for each on-chain decision.</p>
  </header>

<!-- AUTO-STATS:START -->
<div class="stats-row">
  <div class="stat-cell">
    <span class="stat-num total">25</span>
    <span class="stat-label">Total Votes</span>
  </div>
  <div class="stat-cell">
    <span class="stat-num yes">12</span>
    <span class="stat-label">Yes</span>
  </div>
  <div class="stat-cell">
    <span class="stat-num no">2</span>
    <span class="stat-label">No</span>
  </div>
  <div class="stat-cell">
    <span class="stat-num abstain">11</span>
    <span class="stat-label">Abstain</span>
  </div>
</div>
<!-- AUTO-STATS:END -->

  <!-- NAV NOTICE -->
  <div class="nav-notice">
    <span class="icon">⬡</span>
    <span>
      <span class="nav-notice-label">Start here:</span>
      <a href="RCADA_GOVERNANCE_POLICY.html">RCADA DRep Governance Policy</a>
    </span>
  </div>

  <!-- LATEST VOTES -->
  <div class="section-header">
    <h2>Latest Votes</h2>
  </div>

<!-- AUTO-INDEX:START -->
<div class="vote-list">
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-24</div>
    <strong><a href="votes/2026/Blockfrost_Maintenance and Next Generation Indexing.html">Blockfrost: Maintenance and Next Generation Indexing</a></strong>
    <span class="badge badge-abstain">Abstain</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-24</div>
    <strong><a href="votes/2026/IO and Ensurable Systems_Cardano Maintenance Initiative.html">IO &amp; Ensurable Systems: Cardano Maintenance Initiative</a></strong>
    <span class="badge badge-yes">Yes</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-24</div>
    <strong><a href="votes/2026/IO and Midgard Labs_L2 Scalability Initiative.html">IO &amp; Midgard Labs: L2 Scalability Initiative</a></strong>
    <span class="badge badge-abstain">Abstain</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-24</div>
    <strong><a href="votes/2026/IO & VacuumLabs_Enhancing Plutus - Performance, Correctness, and Usability.html">IO &amp; VacuumLabs: Enhancing Plutus — Performance, Correctness, and Usability</a></strong>
    <span class="badge badge-yes">Yes</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-24</div>
    <strong><a href="votes/2026/IO_Cardano High Assurance Technical Collaboration.html">IO: Cardano High Assurance Technical Collaboration</a></strong>
    <span class="badge badge-yes">Yes</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-24</div>
    <strong><a href="votes/2026/Pogun_Capital Without Compromise.html">Pogun: Capital Without Compromise</a></strong>
    <span class="badge badge-abstain">Abstain</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-24</div>
    <strong><a href="votes/2026/The first node in the browser-a Cardano USP.html">The First Node in the Browser: A Cardano USP</a></strong>
    <span class="badge badge-yes">Yes</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-23</div>
    <strong><a href="votes/2026/IO_Cardano Upgrades.html">IO: Cardano Upgrades</a></strong>
    <span class="badge badge-yes">Yes</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-23</div>
    <strong><a href="votes/2026/IO_Consensus Initiative.html">IO: Consensus Initiative (Leios)</a></strong>
    <span class="badge badge-yes">Yes</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
  <div class="vote-card fade-in">
    <div class="vote-date">2026-05-20</div>
    <strong><a href="votes/2026/IO: Developer Experience Initiative.html">IO: Developer Experience Initiative</a></strong>
    <span class="badge badge-abstain">Abstain</span>
    <span class="badge badge-type">Treasury Withdrawals</span>
  </div>
</div>
<!-- AUTO-INDEX:END -->

  <!-- ARCHIVE & REFERENCE -->
  <div class="section-header" style="margin-top:2.5rem;">
    <h2>Archive &amp; Reference</h2>
  </div>

  <div class="info-grid">
    <div class="info-card">
      <h3>How to read a vote</h3>
      <ul>
        <li>Governance metadata (action ID, type, expiry)</li>
        <li>The vote cast (Yes / No / Abstain)</li>
        <li>Full rationale in RCADA's voice</li>
        <li>Links to supporting material when available</li>
      </ul>
    </div>
    <div class="info-card">
      <h3>Browse by year</h3>
      <div class="browse-links" style="margin-bottom:1rem;">
        <a class="browse-link" href="votes/2026/">2026 votes →</a>
        <a class="browse-link" href="votes/2025/">2025 votes →</a>
      </div>
      <p style="font-size:12px;color:var(--text-dim);font-family:var(--mono);line-height:1.6;">
        "Info" actions = sentiment signals. Treasury &amp; protocol changes assessed against constitutional guardrails.
      </p>
    </div>
  </div>

  <div class="coverage-note">
    <strong>Historical coverage:</strong> This archive reflects RCADA's structured governance methodology introduced in late 2025. Earlier votes were conducted prior to this framework and are not included.
  </div>

  <footer class="footer">
    <span class="footer-brand">RCADA · DRep Governance</span>
    <span class="footer-chain">Powered by <span>Cardano</span></span>
  </footer>

</div><!-- /page-wrap -->

</body>
</html>
