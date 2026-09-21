```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Gusti Cahya — n8n Automation & AI Integration Specialist</title>
<meta name="description" content="I build n8n automation workflows and AI integrations that turn manual busywork into systems that run themselves.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#14171d;
    --bg-alt:#1b1f27;
    --bg-alt-2:#20242e;
    --ink:#f4f5f3;
    --ink-dim:#a6adb8;
    --ink-faint:#6b7280;
    --accent:#5eead4;
    --accent-warm:#ff9f5a;
    --line:#2a2f3a;
    --line-soft:#22262f;
    --font-display:'Space Grotesk', 'Segoe UI', sans-serif;
    --font-body:'IBM Plex Sans', 'Segoe UI', sans-serif;
    --font-mono:'IBM Plex Mono', 'Courier New', monospace;
  }
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]){
      --bg:#14171d; --bg-alt:#1b1f27; --ink:#f4f5f3; --ink-dim:#a6adb8;
    }
  }
  :root[data-theme="dark"]{
    --bg:#14171d; --bg-alt:#1b1f27; --ink:#f4f5f3; --ink-dim:#a6adb8;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth; scroll-padding-top:env(safe-area-inset-top,0px);}
  body{
    margin:0;
    background:var(--bg);
    color:var(--ink);
    font-family:var(--font-body);
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
    padding-top:env(safe-area-inset-top,0px);
    padding-bottom:env(safe-area-inset-bottom,0px);
    overflow-x:hidden;
  }
  @media (prefers-reduced-motion: reduce){
    *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important;}
  }
  a{color:inherit;}
  .wrap{max-width:1120px; margin:0 auto; padding:0 28px;}
  .prose{max-width:640px;}
  .canvas-bg{
    position:absolute; inset:0;
    background-image: radial-gradient(var(--line-soft) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0) 85%);
    pointer-events:none;
  }
  header{
    position:sticky; top:env(safe-area-inset-top,0px); z-index:50;
    background:rgba(20,23,29,0.86);
    backdrop-filter:blur(10px);
    border-bottom:1px solid var(--line-soft);
  }
  nav{display:flex; align-items:center; justify-content:space-between; padding:18px 28px; max-width:1120px; margin:0 auto;}
  .logo{font-family:var(--font-display); font-weight:700; font-size:1.15rem; letter-spacing:0.01em; text-decoration:none;}
  .logo span{color:var(--accent);}
  .navlinks{display:flex; gap:32px; align-items:center;}
  .navlinks a{text-decoration:none; color:var(--ink-dim); font-size:0.95rem; transition:color .15s ease;}
  .navlinks a:hover{color:var(--ink);}
  .btn{
    display:inline-flex; align-items:center; gap:8px;
    padding:11px 20px; border-radius:8px; font-size:0.95rem; font-weight:500;
    text-decoration:none; border:1px solid transparent; cursor:pointer;
    transition:transform .15s ease, border-color .15s ease, background .15s ease;
  }
  .btn-primary{background:var(--accent); color:#0d1512;}
  .btn-primary:hover{transform:translateY(-1px);}
  .btn-ghost{border-color:var(--line); color:var(--ink);}
  .btn-ghost:hover{border-color:var(--ink-dim);}
  .navcta{display:none;}
  @media (min-width:720px){ .navcta{display:inline-flex;} }
  .navlinks-mobile-hide{display:none;}
  @media (min-width:720px){ .navlinks-mobile-hide{display:flex;} }
  .hero{position:relative; padding:88px 0 96px;}
  .hero-grid{display:grid; grid-template-columns:1fr; gap:56px; align-items:center; position:relative;}
  @media (min-width:900px){ .hero-grid{grid-template-columns:1.05fr 0.95fr;} }
  .hero h1{
    font-family:var(--font-display); font-weight:700;
    font-size:clamp(2.1rem, 4.6vw, 3.4rem);
    line-height:1.12; letter-spacing:-0.01em; margin:0 0 22px;
  }
  .hero p.lede{color:var(--ink-dim); font-size:1.15rem; max-width:520px; margin:0 0 30px;}
  .hero .ctas{display:flex; flex-wrap:wrap; gap:14px; margin-bottom:26px;}
  .trustline{color:var(--ink-faint); font-size:0.9rem; display:flex; align-items:center; gap:8px;}
  .trustline .dot{width:6px; height:6px; border-radius:50%; background:var(--accent-warm); flex:none;}
  .flow{position:relative; padding:12px;}
  .flow svg{width:100%; height:auto; display:block; overflow:visible;}
  .node-label{font-family:var(--font-mono); font-size:11px; fill:var(--ink-dim);}
  .node-title{font-family:var(--font-body); font-size:13px; font-weight:600; fill:var(--ink);}
  section{padding:88px 0; border-top:1px solid var(--line-soft);}
  h2{
    font-family:var(--font-display); font-weight:600;
    font-size:clamp(1.6rem, 2.6vw, 2.1rem); letter-spacing:-0.01em; margin:0 0 14px;
  }
  .section-intro{color:var(--ink-dim); max-width:560px; margin:0 0 48px; font-size:1.02rem;}
  .services{display:grid; grid-template-columns:1fr; gap:1px; background:var(--line-soft); border:1px solid var(--line-soft); border-radius:14px; overflow:hidden;}
  @media (min-width:800px){ .services{grid-template-columns:repeat(3,1fr);} }
  .service{background:var(--bg-alt); padding:32px 28px;}
  .service .mark{width:34px; height:34px; margin-bottom:20px;}
  .service h3{font-family:var(--font-display); font-size:1.05rem; margin:0 0 10px; font-weight:600;}
  .service p{color:var(--ink-dim); font-size:0.96rem; margin:0;}
  .work-list{display:flex; flex-direction:column; gap:1px; background:var(--line-soft); border:1px solid var(--line-soft); border-radius:14px; overflow:hidden;}
  .work-card{background:var(--bg-alt); padding:30px 30px; display:grid; grid-template-columns:1fr; gap:20px;}
  @media (min-width:860px){ .work-card{grid-template-columns:1.15fr 1fr; gap:36px; align-items:center;} }
  .work-card h3{font-family:var(--font-display); font-size:1.15rem; margin:0 0 10px; font-weight:600;}
  .work-card p{color:var(--ink-dim); font-size:0.97rem; margin:0 0 16px; max-width:480px;}
  .tags{display:flex; flex-wrap:wrap; gap:8px;}
  .tag{font-family:var(--font-mono); font-size:11.5px; color:var(--accent); background:rgba(94,234,212,0.08); border:1px solid rgba(94,234,212,0.25); padding:4px 9px; border-radius:6px;}
  .mini-flow{width:100%; height:auto; display:block;}
  .mini-flow .n{stroke:var(--line); fill:var(--bg-alt-2);}
  .mini-flow .p{stroke:var(--accent); stroke-width:1.6;}
  .mini-flow .t{font-family:var(--font-mono); font-size:9.5px; fill:var(--ink-faint);}
  .other-work{margin-top:64px;}
  .other-work h3.subhead{font-family:var(--font-display); font-size:1.1rem; font-weight:600; color:var(--ink-dim); margin:0 0 22px;}
  .other-grid{display:grid; grid-template-columns:1fr; gap:20px;}
  @media (min-width:720px){ .other-grid{grid-template-columns:1fr 1fr;} }
  .other-item{border:1px solid var(--line-soft); border-radius:12px; padding:22px 24px;}
  .other-item h4{font-family:var(--font-display); font-size:1rem; margin:0 0 8px; font-weight:600;}
  .other-item p{color:var(--ink-dim); font-size:0.92rem; margin:0 0 14px;}
  .other-item .stack{color:var(--ink-faint); font-size:0.82rem; font-family:var(--font-mono); margin-bottom:12px;}
  .other-item a{font-size:0.9rem; color:var(--accent); text-decoration:none; border-bottom:1px solid rgba(94,234,212,0.35);}
  .about-grid{display:grid; grid-template-columns:1fr; gap:48px;}
  @media (min-width:900px){ .about-grid{grid-template-columns:1fr 1fr;} }
  .timeline-item{border-left:2px solid var(--line); padding:2px 0 26px 22px; position:relative;}
  .timeline-item::before{content:""; position:absolute; left:-6px; top:4px; width:10px; height:10px; border-radius:50%; background:var(--accent);}
  .timeline-item:last-child{padding-bottom:0;}
  .timeline-item h4{font-family:var(--font-display); font-size:1.02rem; margin:0 0 4px; font-weight:600;}
  .timeline-item .meta{color:var(--ink-faint); font-size:0.85rem; font-family:var(--font-mono); margin-bottom:8px;}
  .timeline-item p{color:var(--ink-dim); font-size:0.94rem; margin:0;}
  .skill-group{margin-bottom:26px;}
  .skill-group h4{font-family:var(--font-display); font-size:0.95rem; margin:0 0 12px; color:var(--ink-dim); font-weight:600;}
  .pill-row{display:flex; flex-wrap:wrap; gap:8px;}
  .pill{font-size:0.85rem; padding:6px 12px; border:1px solid var(--line); border-radius:20px; color:var(--ink-dim);}
  .contact-box{
    border:1px solid var(--line); border-radius:16px; padding:48px 40px;
    background:linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%);
    text-align:left;
  }
  .contact-box h2{margin-bottom:14px;}
  .contact-box p{color:var(--ink-dim); max-width:520px; margin:0 0 32px;}
  .contact-links{display:flex; flex-wrap:wrap; gap:14px;}
  footer{padding:36px 0 48px; color:var(--ink-faint); font-size:0.85rem;}
  footer .wrap{display:flex; flex-direction:column; gap:6px;}
  @media (min-width:700px){ footer .wrap{flex-direction:row; justify-content:space-between;} }
  ::selection{background:var(--accent); color:#0d1512;}
</style>
</head>
<body>

<header>
  <nav>
    <a class="logo" href="#top">GC<span>.</span></a>
    <div class="navlinks navlinks-mobile-hide">
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
    <a class="btn btn-primary navcta" href="#contact">Start a project</a>
  </nav>
</header>

<main id="top">

  <section class="hero" style="border-top:none; padding-top:64px;">
    <div class="canvas-bg" style="height:640px;"></div>
    <div class="wrap hero-grid">
      <div>
        <h1>I turn manual busywork into workflows that run themselves.</h1>
        <p class="lede">n8n automation and AI integration for teams who'd rather build than repeat the same five steps by hand, every single day.</p>
        <div class="ctas">
          <a class="btn btn-primary" href="#work">See the work</a>
          <a class="btn btn-ghost" href="#contact">Start a project</a>
        </div>
        <div class="trustline"><span class="dot"></span>Also available for AI data annotation & model evaluation work.</div>
      </div>

      <div class="flow" role="img" aria-label="Diagram showing a workflow moving from Trigger to Logic to AI to Action">
        <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg">
          <path id="path1" d="M60,60 C110,60 110,150 165,150" fill="none" stroke="#2a2f3a" stroke-width="2"/>
          <path id="path2" d="M255,150 C300,150 300,60 345,60" fill="none" stroke="#2a2f3a" stroke-width="2"/>
          <path id="path3" d="M60,240 C110,240 110,150 165,150" fill="none" stroke="#2a2f3a" stroke-width="2"/>
          <path id="path4" d="M255,150 C300,150 300,240 345,240" fill="none" stroke="#2a2f3a" stroke-width="2"/>
          <circle r="4" fill="#5eead4">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M60,60 C110,60 110,150 165,150" />
          </circle>
          <circle r="4" fill="#5eead4">
            <animateMotion dur="3.2s" begin="0.4s" repeatCount="indefinite" path="M60,240 C110,240 110,150 165,150" />
          </circle>
          <circle r="4" fill="#ff9f5a">
            <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite" path="M255,150 C300,150 300,60 345,60" />
          </circle>
          <circle r="4" fill="#ff9f5a">
            <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite" path="M255,150 C300,150 300,240 345,240" />
          </circle>
          <g>
            <rect x="10" y="40" width="100" height="40" rx="8" fill="#1b1f27" stroke="#2a2f3a"/>
            <text x="60" y="55" text-anchor="middle" class="node-title">Trigger</text>
            <text x="60" y="70" text-anchor="middle" class="node-label">form submitted</text>
          </g>
          <g>
            <rect x="10" y="220" width="100" height="40" rx="8" fill="#1b1f27" stroke="#2a2f3a"/>
            <text x="60" y="235" text-anchor="middle" class="node-title">Trigger</text>
            <text x="60" y="250" text-anchor="middle" class="node-label">new record</text>
          </g>
          <g>
            <rect x="165" y="130" width="100" height="40" rx="8" fill="#1b1f27" stroke="#5eead4"/>
            <text x="215" y="145" text-anchor="middle" class="node-title">Logic + AI</text>
            <text x="215" y="160" text-anchor="middle" class="node-label">route, filter</text>
          </g>
          <g>
            <rect x="345" y="40" width="105" height="40" rx="8" fill="#1b1f27" stroke="#2a2f3a"/>
            <text x="397" y="55" text-anchor="middle" class="node-title">Action</text>
            <text x="397" y="70" text-anchor="middle" class="node-label">CRM updated</text>
          </g>
          <g>
            <rect x="345" y="220" width="105" height="40" rx="8" fill="#1b1f27" stroke="#2a2f3a"/>
            <text x="397" y="235" text-anchor="middle" class="node-title">Action</text>
            <text x="397" y="250" text-anchor="middle" class="node-label">WhatsApp sent</text>
          </g>
        </svg>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="wrap">
      <h2>What I do</h2>
      <p class="section-intro">Three ways I help businesses spend less time on repetitive work and more time on what actually needs a human.</p>
      <div class="services">
        <div class="service">
          <svg class="mark" viewBox="0 0 34 34" fill="none"><circle cx="8" cy="17" r="4" stroke="#5eead4" stroke-width="1.6"/><circle cx="26" cy="8" r="4" stroke="#5eead4" stroke-width="1.6"/><circle cx="26" cy="26" r="4" stroke="#5eead4" stroke-width="1.6"/><path d="M12 17H22M22 17L18 12M22 17L18 22" stroke="#5eead4" stroke-width="1.4"/></svg>
          <h3>Workflow automation</h3>
          <p>Connect the tools you already use — CRMs, forms, spreadsheets, WhatsApp, Slack — into pipelines that run in the background, with error handling so nothing quietly fails.</p>
        </div>
        <div class="service">
          <svg class="mark" viewBox="0 0 34 34" fill="none"><rect x="6" y="6" width="22" height="22" rx="5" stroke="#ff9f5a" stroke-width="1.6"/><path d="M13 17H21M17 13V21" stroke="#ff9f5a" stroke-width="1.6"/></svg>
          <h3>AI integration</h3>
          <p>Add an OpenAI or Claude step into a workflow so it can read, summarize, sort, or reply on its own — without needing someone to babysit it.</p>
        </div>
        <div class="service">
          <svg class="mark" viewBox="0 0 34 34" fill="none"><path d="M8 24L16 8L24 24" stroke="#5eead4" stroke-width="1.6" stroke-linejoin="round"/><path d="M11 19H21" stroke="#5eead4" stroke-width="1.6"/></svg>
          <h3>AI data annotation & evaluation</h3>
          <p>Label, rank, and review AI outputs with the accuracy and consistency that model training actually needs — following detailed guidelines closely.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="work">
    <div class="wrap">
      <h2>Automation case studies</h2>
      <p class="section-intro">A few of the workflows I've built — each one replaces a manual step with something that just happens.</p>

      <div class="work-list">
        <div class="work-card">
          <div>
            <h3>Lead capture: form → CRM → instant WhatsApp alert</h3>
            <p>A form submission moves straight into the CRM and pings the sales team on WhatsApp before the lead has time to go cold.</p>
            <div class="tags"><span class="tag">n8n</span><span class="tag">Google Sheets</span><span class="tag">WhatsApp API</span></div>
          </div>
          <svg class="mini-flow" viewBox="0 0 260 60"><rect class="n" x="0" y="15" width="70" height="30" rx="6"/><text class="t" x="35" y="34" text-anchor="middle" fill="#a6adb8">Form</text><path class="p" d="M70,30H110" fill="none"/><rect class="n" x="110" y="15" width="70" height="30" rx="6"/><text class="t" x="145" y="34" text-anchor="middle" fill="#a6adb8">CRM</text><path class="p" d="M180,30H220" fill="none"/><rect class="n" x="220" y="15" width="40" height="30" rx="6"/><text class="t" x="240" y="34" text-anchor="middle" fill="#a6adb8">WA</text></svg>
        </div>
        <div class="work-card">
          <div>
            <h3>AI-powered data processing pipeline</h3>
            <p>Incoming data gets cleaned, summarized, and categorized by an AI step before it ever reaches a spreadsheet.</p>
            <div class="tags"><span class="tag">n8n</span><span class="tag">OpenAI API</span></div>
          </div>
          <svg class="mini-flow" viewBox="0 0 260 60"><rect class="n" x="0" y="15" width="60" height="30" rx="6"/><text class="t" x="30" y="34" text-anchor="middle" fill="#a6adb8">Data</text><path class="p" d="M60,30H100" fill="none"/><rect class="n" x="100" y="15" width="60" height="30" rx="6" stroke="#5eead4"/><text class="t" x="130" y="34" text-anchor="middle" fill="#a6adb8">AI</text><path class="p" d="M160,30H200" fill="none"/><rect class="n" x="200" y="15" width="60" height="30" rx="6"/><text class="t" x="230" y="34" text-anchor="middle" fill="#a6adb8">Sheet</text></svg>
        </div>
        <div class="work-card">
          <div>
            <h3>Webhook → Google Sheets, with error handling</h3>
            <p>Every incoming request is logged, retried on failure, and never silently disappears.</p>
            <div class="tags"><span class="tag">n8n</span><span class="tag">Webhooks</span><span class="tag">Google Sheets</span></div>
          </div>
          <svg class="mini-flow" viewBox="0 0 260 60"><rect class="n" x="0" y="15" width="70" height="30" rx="6"/><text class="t" x="35" y="34" text-anchor="middle" fill="#a6adb8">Webhook</text><path class="p" d="M70,30H110" fill="none"/><rect class="n" x="110" y="15" width="70" height="30" rx="6"/><text class="t" x="145" y="34" text-anchor="middle" fill="#a6adb8">Retry</text><path class="p" d="M180,30H220" fill="none"/><rect class="n" x="220" y="15" width="40" height="30" rx="6"/><text class="t" x="240" y="34" text-anchor="middle" fill="#a6adb8">Log</text></svg>
        </div>
        <div class="work-card">
          <div>
            <h3>Typeform → Airtable → Slack alert</h3>
            <p>A multi-step intake form ends with the right person getting notified in Slack within seconds of submission.</p>
            <div class="tags"><span class="tag">n8n</span><span class="tag">Typeform</span><span class="tag">Airtable</span><span class="tag">Slack</span></div>
          </div>
          <svg class="mini-flow" viewBox="0 0 260 60"><rect class="n" x="0" y="15" width="70" height="30" rx="6"/><text class="t" x="35" y="34" text-anchor="middle" fill="#a6adb8">Intake</text><path class="p" d="M70,30H110" fill="none"/><rect class="n" x="110" y="15" width="70" height="30" rx="6"/><text class="t" x="145" y="34" text-anchor="middle" fill="#a6adb8">Airtable</text><path class="p" d="M180,30H220" fill="none"/><rect class="n" x="220" y="15" width="40" height="30" rx="6"/><text class="t" x="240" y="34" text-anchor="middle" fill="#a6adb8">Slack</text></svg>
        </div>
        <div class="work-card">
          <div>
            <h3>Custom AI agent for automated data filtering</h3>
            <p>An AI agent reviews incoming records and only forwards the ones that actually need a human to look at them.</p>
            <div class="tags"><span class="tag">n8n</span><span class="tag">AI Agents</span><span class="tag">OpenAI API</span></div>
          </div>
          <svg class="mini-flow" viewBox="0 0 260 60"><rect class="n" x="0" y="15" width="60" height="30" rx="6"/><text class="t" x="30" y="34" text-anchor="middle" fill="#a6adb8">Records</text><path class="p" d="M60,30H100" fill="none"/><rect class="n" x="100" y="15" width="60" height="30" rx="6" stroke="#5eead4"/><text class="t" x="130" y="34" text-anchor="middle" fill="#a6adb8">Agent</text><path class="p" d="M160,30H200" fill="none"/><rect class="n" x="200" y="15" width="60" height="30" rx="6"/><text class="t" x="230" y="34" text-anchor="middle" fill="#a6adb8">Human</text></svg>
        </div>
      </div>

      <div class="other-work">
        <h3 class="subhead">Other engineering work</h3>
        <div class="other-grid">
          <div class="other-item">
            <h4>Latihan Trading</h4>
            <p>A high-end backtesting platform for traders, with AI-driven analytics to evaluate trading performance.</p>
            <div class="stack">Next.js · Tailwind CSS · Neon · Prisma · NextAuth.js · Recharts</div>
            <a href="https://latihantrading.com" target="_blank" rel="noopener">View live</a>
          </div>
          <div class="other-item">
            <h4>Tradexa</h4>
            <p>A mobile trading journal app that helps traders monitor results and refine their edge.</p>
            <div class="stack">Flutter · Riverpod · Isar</div>
            <a href="https://github.com/GustiCahya/tradexa-flutter-app" target="_blank" rel="noopener">View repo</a>
          </div>
          <div class="other-item">
            <h4>Tablogs</h4>
            <p>A cloud platform for creating soil boring logs and managing borehole data from field to final report.</p>
            <div class="stack">Angular</div>
            <a href="https://tablogs.com" target="_blank" rel="noopener">View live</a>
          </div>
          <div class="other-item">
            <h4>Lelang Agunan — Bank Negara Indonesia</h4>
            <p>Collateral auction platform built for one of Indonesia's largest state-owned banks.</p>
            <div class="stack">React · Flutter.net</div>
            <a href="https://lelangagunan.bni.co.id" target="_blank" rel="noopener">View live</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="wrap">
      <h2>From frontend engineering to AI automation</h2>
      <p class="section-intro">A quick look at how I got here, and what I actually work with day to day.</p>

      <div class="about-grid">
        <div>
          <div class="timeline-item">
            <h4>Automation & AI Specialist</h4>
            <div class="meta">Self-employed · 2026 — Present</div>
            <p>Building n8n workflows that connect CRMs, forms, and messaging tools, integrating AI (OpenAI, Claude) into those workflows, and doing AI data annotation & evaluation work to help train better models.</p>
          </div>
          <div class="timeline-item">
            <h4>Frontend Developer</h4>
            <div class="meta">Bank Negara Indonesia · 2022</div>
            <p>Built a debt collector app, a debt approval system, and a collateral auction platform to streamline financial workflows and improve the experience for internal teams.</p>
          </div>
        </div>

        <div>
          <div class="skill-group">
            <h4>Automation & AI</h4>
            <div class="pill-row">
              <span class="pill">n8n</span><span class="pill">OpenAI API</span><span class="pill">Claude API</span>
              <span class="pill">Zapier</span><span class="pill">Make</span><span class="pill">AI Agents</span>
              <span class="pill">Data Annotation & Evaluation</span>
            </div>
          </div>
          <div class="skill-group">
            <h4>Engineering</h4>
            <div class="pill-row">
              <span class="pill">React</span><span class="pill">Next.js</span><span class="pill">TypeScript</span>
              <span class="pill">Node.js</span><span class="pill">REST APIs</span><span class="pill">GraphQL</span>
            </div>
          </div>
          <div class="skill-group">
            <h4>Tools & ways of working</h4>
            <div class="pill-row">
              <span class="pill">Git</span><span class="pill">Figma</span><span class="pill">CI/CD</span>
              <span class="pill">Agile</span><span class="pill">Remote collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="wrap">
      <div class="contact-box">
        <h2>Have a process that's still done by hand?</h2>
        <p>Tell me what you're repeating manually every week — there's a good chance it can run on its own.</p>
        <div class="contact-links">
          <a class="btn btn-primary" href="mailto:gusticahya.work@gmail.com">Email me</a>
          <a class="btn btn-ghost" href="https://www.linkedin.com/in/gusti-bagus-cahya-utama/" target="_blank" rel="noopener">LinkedIn</a>
          <a class="btn btn-ghost" href="https://github.com/gusticahya" target="_blank" rel="noopener">GitHub</a>
          <a class="btn btn-ghost" href="https://www.youtube.com/@cahya7997" target="_blank" rel="noopener">YouTube</a>
        </div>
      </div>
    </div>
  </section>

</main>

<footer>
  <div class="wrap">
    <span>© 2026 Gusti Bagus Cahya Utama. All rights reserved.</span>
    <span>Built with n8n workflows in mind.</span>
  </div>
</footer>

</body>
</html>
```