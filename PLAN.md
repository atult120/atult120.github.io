# Plan: Atul Tiwari – Senior Backend Engineer Portfolio (Astro + Tailwind → GitHub Pages)

## Context
Atul needs a portfolio site, deployed on GitHub, built from his resume (`Profile (1).pdf`: 8 yrs backend, Project Lead at Persistent Systems, previously Wilco Source, Torinit, i-XL, Bookmyflat) and his core stack (Node.js, NestJS, PostgreSQL, MongoDB, microservices), plus senior-backend extras. The project dir is empty except the PDF and is not a git repo. `gh` is authenticated as `atult120`; Node 20 / npm 10 are available.

Decisions made: Astro + Tailwind, repo `atult120.github.io` (served at https://atult120.github.io), public contacts = LinkedIn + GitHub only (no phone or email), extras = architecture diagrams, case studies, engineering approach, blog + downloadable resume.

## Site structure (single-page home + content routes)
- `/` Home sections: Hero (name, "Senior Backend Engineer & Tech Lead", 8 yrs, tagline, CTAs: Resume PDF / LinkedIn / GitHub) → Impact stats (1M+ monthly requests, 99.95% uptime, 40% API latency cut, $3.5K/mo saved, 8-person team) → About → Skills → Experience timeline → Case studies → Architecture → Engineering approach → Blog preview → Contact (LinkedIn/GitHub)
- `/case-studies/[slug]` – 4 pages: (1) Ultrasound imaging platform serverless APIs (Wilco Source), (2) PHP monolith → Lambda/ECS microservices (i-XL), (3) Multi-tenant SaaS with RBAC for 100K+ users (Torinit), (4) Rental platform performance and automation (Bookmyflat)
- `/blog` + `/blog/[slug]` – Markdown content collection, with 2–3 starter posts (outlines to be filled by Atul; marked draft if unreviewed)
- `/resume.pdf` – copy of the existing PDF

## Content (only from the resume; no invented numbers)
- **Skills groups:** Languages (TypeScript, Node.js, PHP); Frameworks (NestJS, Express, Laravel); Data (PostgreSQL, MongoDB, MySQL, Redis); Architecture (Microservices, event-driven, serverless, multi-tenant, distributed systems, WebSocket, GraphQL/REST); Cloud/DevOps (AWS Lambda, API Gateway, SQS, SNS, S3, RDS, ECS, CloudWatch, X-Ray, Docker, GitHub Actions, CodePipeline); Quality/Security (Jest, Supertest, JWT, OAuth 2.0, RBAC, Helmet, HIPAA-aligned handling); Leadership (mentoring, code review, sprint planning).
- **Senior extras (framed as approach, not claims):** message queues/async patterns (SQS/SNS, outbox, idempotency, retries/DLQ), API design and versioning, caching strategy (Redis), DB design/indexing/query tuning, observability (logs/metrics/traces), security and compliance, CI/CD and IaC mindset, system design trade-offs, cost optimization.
- **Architecture diagrams:** 3 inline SVG/Mermaid-rendered diagrams (serverless ingestion pipeline, microservices with API gateway + queue + Postgres/Mongo, CI/CD pipeline). Illustrative, labelled as "representative architectures based on past work".

## Implementation steps
0. **Design first (Claude Design):** create a private Design artifact with the home page mockup (hero, stats, timeline, case study cards, architecture diagrams), light/dark and mobile variants. Atul reviews and comments on the claude.ai link; iterate until approved. The approved design drives step 2.
1. `git init` in `/Users/atultiwari/Desktop/projects/portfolio-website`; scaffold Astro (TypeScript strict) with `@astrojs/tailwind` (or Tailwind v4 Vite plugin) and `@astrojs/sitemap`; config `site: 'https://atult120.github.io'`, no `base` needed.
2. Layout: `src/layouts/Base.astro` (SEO meta, OG tags, dark/light toggle, responsive nav); components in `src/components/` (Hero, Stats, Timeline, SkillGrid, CaseStudyCard, Diagram, Contact).
3. Content: data in `src/data/*.ts` (experience, skills, stats); `src/content/case-studies/*.md` and `src/content/blog/*.md` via content collections with zod schemas.
4. Diagrams: Mermaid pre-rendered at build (or hand-authored SVG) to avoid client JS.
5. Assets: copy PDF to `public/resume.pdf` (renamed from `Profile (1).pdf`); favicon; OG image.
6. Quality: Lighthouse ≥ 95, accessibility (semantic HTML, contrast, keyboard nav), `prefers-reduced-motion`, minimal JS.
7. Deploy: `.github/workflows/deploy.yml` using `actions/checkout`, `withastro/action`, `actions/deploy-pages` on push to `main`; add `.gitignore`.
8. GitHub: `gh repo create atult120/atult120.github.io --public --source=. --push`, then enable Pages with source = GitHub Actions (`gh api -X POST repos/atult120/atult120.github.io/pages -f build_type=workflow`).
   Both steps are outward-facing, so I will confirm right before running them.

## Verification
- `npm run build` and `npm run preview`; open each route, check links, resume download, dark mode, mobile width.
- `npx astro check` (types) and a Lighthouse run on the preview.
- After push: confirm the Actions run succeeds and https://atult120.github.io loads (`gh run watch`, `curl -I`).

## Open items for Atul after build
- Review the case-study wording and the blog starter posts.
- Note: the resume lists the PDF text only; no photo is assumed (optional avatar can be added).
- The resume PDF contains the phone number and email, so it will be public via the download button. Say so if you want a redacted copy instead.
