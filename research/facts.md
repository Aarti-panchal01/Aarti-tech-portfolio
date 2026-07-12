# Research: verified facts about Aarti Panchal

Compiled 2026-07-12. Sources: aarti-panchal.site (rendered via headless browser, all 10 pages),
GitHub REST API (user, repos, events, search/issues, contributors), repo READMEs
(c4gt-2026-amrit, aria-agent, verifi.ed, proofchain-ai, Shashanksharma280201/Khoj).
LinkedIn: attempted via web search, could not locate/verify her profile — skipped, nothing used from it.
Hashnode: see "Blog" section at the bottom.

Every claim on the final site must trace to a line in this file.

---

## Identity

- Name: Aarti Panchal
- GitHub: `Aarti-panchal01` (created 2025-02-18, 42 public repos, 28 followers, bio: "Curious kid. I build what I want to see", company: PESU, location: Bangalore) — source: GitHub API
- Email (public, from site footer): aartipanchal539@gmail.com
- B.Tech AIML student at PES University, Electronic City Campus (PESU ECC), Bengaluru — source: site (multiple pages)
- Old portfolio: https://aarti-panchal.site/ (base44 SPA, 5-persona structure: Founder / Researcher / Cadet / Engineer / Dreamer)

## Current work (as of July 2026)

### C4GT DMP 2026 — AMRIT / Piramal Swasthya (the anchor fact set)

Source: github.com/Aarti-panchal01/c4gt-2026-amrit README + PSMRI GitHub org data.

- Selected for Code for GovTech (C4GT) Dedicated Mentoring Program 2026.
- Organization: AMRIT (Accessible Medical Records via Integrated Technology) by Piramal Swasthya Management and Research Institute (PSMRI). Site adds "× IIIT Hyderabad".
- Project period: June 10 – September 10, 2026 (13 weeks). Listed as "Lead Contributor: Aarti Panchal".
- Task: re-platform **Helpline104-UI** — the web front-end used by call-center agents and clinical staff of India's "104" public-health helpline (medical advice, counseling, grievance resolution, epidemic-outbreak info, prescription, maternal/child death review) — from **Angular 4.1.3 to Angular 20**, replacing an abandoned UI stack (Angular Material beta, `md2`, jQuery, Bootstrap 3) with **ZardUI** (Tailwind + Angular CDK component library).
- NOTE/DISCREPANCY: the old site says "Angular 4 to Angular 19"; the README and the actual code/PRs say Angular 20. **Use Angular 20** (PR #1: "chore: Angular 20 + ZardUI foundation setup").
- Scale of legacy codebase per README: ~118 components, 65 services (README elsewhere says ~67 services — use "~65"), 138 templates, RxJS 5→7 `.pipe()` migration across ~108 files.
- Strategy: fresh-workspace re-platform, NOT incremental `ng update`, because `@angular/http`, Material `Md*` barrel, RxJS 5 patch operators, `md2`, `.angular-cli.json` are all removed/abandoned in the target.
- Specific technical moves (README): custom `Http`-subclass interceptors → functional `HttpInterceptor`s via `provideHttpClient(withInterceptors(...))`; single root NgModule → standalone components with lazy `loadComponent` routes; Karma/Jasmine + Protractor → modern TestBed + Playwright; TSLint → angular-eslint; Webpack → esbuild.
- **Contribution stats (GitHub API, PSMRI/Helpline104-UI-NEXT, checked 2026-07-12): Aarti-panchal01 has 94 commits; the only other contributor (drtechie, mentor) has 1. Repo is TypeScript, created 2026-06-12.**
- 29 PRs authored on PSMRI org repos; on Helpline104-UI-NEXT: PRs #1–#25 (18 merged so far, rest open as of 2026-07-12). Merged highlights:
  - #1 Angular 20 + ZardUI foundation setup (merged 2026-06-12)
  - #2 role selection, auth guard
  - #3 dashboard shell — header, agent ID, campaign toggle, call statistics, i18n layer
  - #4 auth flows: reset-password, set-password, security questions
  - #5 inbound-call innerpage shell — CTI postMessage listener, CallStore, InboundGuard, call-duration timer
  - #6 beneficiary registration — identify inbound caller by CLI
  - #7 HAO workspace — CDK stepper replacing legacy carousel
  - #9 SNOMED CT search and CDSS components
  - #10 prescription, diabetic screening, BP screening components
  - #11 role workspaces, outbound workflow, remaining P1 components
  - #12/#13 all 10 SIO service tab components
  - #14 wire real service components into HAO workspace
  - #15 poll agent telephony state for My ID status and campaign sync
  - #17 agent call-type (CDI) report suite
  - #18 alerts & notifications messages dialog
  - #23 wire casesheet history, disease summary, schedule appointment, districtID through CallStore
  - Open: #16 consent gating, #19–21 supervisor area (sidebar shell, 8 report screens, configuration), #22 CZentrix CTI login handshake, #25 register inbound calls with backend on CTI connect
- Common-UI (PSMRI) merged PRs: #49 "feat(v2/ui): add ZardUI component library (Button, Dialog, Form, Input, Loader, Pagination, Table, Toast)", #57 ZardCheckboxComponent, #78 dialog zContent crash guard fix.
- Earlier open-source contributions to PSMRI (May 2026, pre-selection): MMU-UI merged fixes (#343/#344 remove console statements from production, duplicate tsconfig property), plus open PRs across HWC-API (HTTP status codes, removing patient-data logging), Helpline1097-UI & Helpline104-UI (fdescribe→describe to un-skip test suites), Common-UI (aria-labels on ABHA components), CONTRIBUTING.md docs for HWC-UI and MMU-UI.
- Site: chose C4GT DMP 2026 over offers from PESU Research Forum and PESU Venture Labs.

### Quantum research — Quanad Lab

Source: site /Researcher (site spells it "Quanad Lab"; user's brief wrote "Quandalab" — using the site spelling).

- Since August 2025, working on building a 2-qubit quantum computer using Nuclear Magnetic Resonance (NMR) with liquid samples.
- Themes: decoherence, noise, limits of measurement; quantum algorithms, quantum simulation, Qiskit, NMR spectroscopy.
- Interested in quantum computing since 11th grade (superposition hook).
- Supporting GitHub evidence: Quantum.projects repo (collection of Python quantum experiments/games, 1★), plus 7 quantum-themed Python repos from April 2025 (Semiconductor_QD_Project — quantum confinement simulation, quantum_stock_simulator, qdot_crypt_encryptor, QuantumDot_RNG_Simulator, quantum_prisoners_dilemma, quantum_dice_game, qdot_visualizer_ml).

### Khoj — founder

Source: site /Founder, /Projects; repo Shashanksharma280201/Khoj (JavaScript; Aarti has 2 closed PRs there).

- Campus lost & found web platform, tagline "Don't Panic. Post It."
- Origin: a lost iPhone charger in a WhatsApp group with 500 unread messages.
- Launched at PES University on January 14, 2026, after pitching the MVP at NITK Incub8 and rebuilding from scratch.
- Site claims 500+ users across Bengaluru campuses. (Self-reported on site; not independently verifiable — phrase carefully.)
- Stack per Khoj repo README: React 18, Vite, TailwindCSS, Express, MongoDB (Mongoose), JWT auth with bcrypt, rate limiting/helmet/CORS. Site says React, Node.js, MongoDB, Vercel.
- NOTE: repo lives under collaborator's account (Shashanksharma280201/Khoj) — she has PRs into it; her own KhojApp-named repo was not found. Don't overstate solo authorship; site says "Founder".

### Microsoft Learn Student Ambassadors

- Site /Engineer: "Research And Development Intern", PES University; student tech communities and educational content. (Only source: site. Keep to one line if used.)

## Projects (GitHub-verified)

- **ARIA — aria-agent** (Python, own repo): autonomous research agent on LangGraph StateGraph. 7 nodes: memory_reader, planner (6 subtasks), executor (Tavily web search), critic (0–10 scoring), replanner (if avg < 7), memory_writer, report_generator. ChromaDB persistent vector memory, structured markdown report output. README marks v1.0 WIP, "core agent functional; Streamlit UI and test suite in development." Site claims Streamlit UI + Groq — README confirms LangGraph/ChromaDB/Tavily; keep Streamlit as "in progress" if mentioned.
- **ProofChain AI — proofchain-ai** (JavaScript, own repo, 6 merged PRs 2026-04-26): "Verify developer credibility in 10 seconds." GitHub repo URL + resume/bio → Trust Score 0–100, skill breakdown, strengths, gaps, shareable Proof ID (e.g. PC-D74138A6DFEE3061), PDF export. Express backend + Groq (Llama 3.3). Live at proofchain-ai.vercel.app. Site: built in ~24h at RIFT '26 hackathon (Feb 19–20, 2026, Physics Wallah Institute of Innovation, Bengaluru); site adds Algorand on-chain storage — the verifi.ed repo is the Algorand protocol piece.
- **verifi.ed** (Python, own repo): "VerifiedProtocol — decentralized skill reputation layer" on Algorand: on-chain attestations, deterministic AI scoring, time-decay reputation/trust index, FastAPI backend + React frontend.
- **sdn-arp-handler** (Python, 2026-04): SDN ARP handling.
- **os-jackfruit** (C, 2026-04) and **PES2UG24AM005-pes-vcs** (C, 2026-04): systems coursework (OS, version-control-system in C).
- **ai_manipulation_detector** (HTML/Python, 2★): detects manipulative speech patterns from voice recordings. (Site describes an "AI Manipulation Detector" as image deepfake detection — repo description says voice. DISCREPANCY: use the repo description or omit.)
- **India-plus** (JavaScript, 1★): AI transparency copilot for Indian public data.
- **pesiot-spark** (TypeScript, 1★): official web platform for the IoT Makerspace at PES University EC Campus.
- Smaller app projects (JavaScript/TypeScript, 1★ each): life-xp (gamified habit tracker), aura-early-disease-detector, MINDCRAFT (three.js journaling), nexus-theai-brain, tone-tamer-ai, explain-o-fun, ride-smart-ai-compare (2★), destiny-scanner.
- Quantum repo set: see Quanad Lab section.
- Rural-Access-Navigator (2026-02, no language data).

## Competitions, events, NCC (source: site only — self-reported)

- AWS Summit Bengaluru 2026, AWS AI League: fine-tuning models and building agents on Amazon Bedrock AgentCore; ranked 113 of 200+ participants (field included working engineers from JPMorgan, Swiggy, Freshworks, Amazon).
- RIFT '26 national hackathon, Feb 19–20 2026: built ProofChain AI in ~24h.
- AI 360° ideathon (Jan 10, 2026, PES RR Campus): built RakthSetu, a GenAI-assisted emergency blood-routing concept.
- IBM Z Datathon 2025; AARAMBH 2025 (NITK Surathkal entrepreneurship summit, Oct 24–26 2025); IEEE CTF (Oct 17–18 2025); LLM Architecture & BERT fine-tuning workshop (Encode.AI, Aug 20 2025); QUANTA quantum-information workshop.
- GSSoC '26 contributor (site footer).
- NCC Air Wing Cadet: 10+ camps, 2 national competitions, Best Air Contingent Award at All India Vayu Sainik Camp (AIVSC) 2024 (contingent award, national level). First microlite sortie at 17; second on her 18th birthday at Yelahanka AFS.
- Site claims "20+ projects", "5+ hackathons, 3 awards". GitHub shows 42 repos (28 original). "20+ projects" is defensible; "3 awards" is not itemized anywhere — avoid.

## Known discrepancies / things to phrase carefully

1. Angular 19 (site) vs Angular 20 (README + PRs) → use 20.
2. Khoj "500+ users" is self-reported → attribute or soften ("used by hundreds of students" is still self-reported; if used, keep the site's framing without inventing precision).
3. ai_manipulation_detector: voice (repo) vs images (site) → prefer repo or omit.
4. "Quanad Lab" (site spelling) vs "Quandalab" (user brief) → site spelling, lowercase-normalized as "Quanad Lab".
5. MLSA "R&D Intern" only appears on the site → at most one line.
6. LinkedIn unverified → no LinkedIn-sourced facts; link can still appear in footer if user's profile URL is known (it is not — omit link unless found elsewhere).
7. "Closeli" and "entangle-ed" (named in the user's brief) were NOT found on GitHub (searched), the site, or the web. No facts available → cannot appear on the site.

## Blog (Hashnode)

- Site /Dreamer says: "Daily documentation through Instagram reels and Hashnode blog."
- Direct API/subdomain probes blocked by Cloudflare; web search found no Hashnode publication under her name.
- Footer "Blog" link href: [pending — being extracted from the rendered site; see below if filled in]
