# LIN-42 — Crochet Hub

## Infrastructure setup

### 2026-04-05T18:45:00Z

- **GitHub**: Created public repo [bjax13/crochet-hub](https://github.com/bjax13/crochet-hub) with README; workspace cloned to `LIN-42` (`.cursor` preserved during clone).
- **Vercel**: Linked project `crochet-hub` under team scope `bjax13s-projects` (`.vercel/project.json`). Framework preset set to **Next.js** via REST API (`PATCH /v9/projects/crochet-hub`).
- **Git ↔ Vercel**: Automatic GitHub connection from `vercel link` / `vercel git connect` failed with “Failed to connect bjax13/crochet-hub” — likely needs the Vercel GitHub App installed / authorized for the `bjax13` account. Complete under Vercel → Project → **Settings → Git**.
- **Supabase (Vercel Marketplace)**: `vercel integration add supabase` reached “Additional setup required. Opening browser…” and exited non-zero in this environment; `vercel integration list` still shows no resources. **Finish Supabase install in the Vercel dashboard** (Integrations → Supabase), then run `vercel env pull .env.local --scope bjax13s-projects` again to pull `POSTGRES_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, etc.
- **Local env**: Ran `vercel env pull .env.local` — file created (gitignored). Until Supabase is connected, expect development env to be minimal (e.g. OIDC token only).
