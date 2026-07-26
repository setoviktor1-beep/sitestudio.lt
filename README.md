# Web App Template

Production-ready Next.js + Better Auth + PostgreSQL web application template for Coolify deployments.

## Architecture

- **web**: Next.js 15 (App Router, TypeScript, Tailwind CSS v4)
- **db**: PostgreSQL 17 for application data (Better Auth & your app data)

Authentication is handled by Better Auth with database session strategy.
Emails (password reset, email verification) are sent via SMTP.
Avatar uploads and other files can optionally be stored via S3-compatible storage.

## Development

```bash
npm install
cp .env.example .env
# Edit .env with your local postgres url, etc.
npm run dev
```

## Deployment on Coolify

1. Push this repo to GitHub.
2. In Coolify: **New → Project → Docker Compose** from that repository.
3. In **Environment Variables**, set:
   - `POSTGRES_PASSWORD`
   - `BETTER_AUTH_SECRET` (generate with `openssl rand -base64 32`)
   - `BETTER_AUTH_URL` (public URL of the app)
   - `SMTP_*` (optional, for emails)
   - `S3_*` (optional, for uploads)
4. **Domains**: Assign your domain to the `web` service. No ports needed (Coolify handles Traefik routing).
5. Deploy.

## Features

- Sign Up / Sign In / Forgot Password / Reset Password
- Dashboard & Admin panel (Role-based access)
- Audit Logs
- Healthcheck endpoint `/api/health`
