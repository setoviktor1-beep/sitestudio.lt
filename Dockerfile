# syntax=docker/dockerfile:1

# ---- Dependencies ----
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# ---- Build ----
FROM node:24-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# Ensure BETTER_AUTH_URL has a valid fallback during build
ARG BETTER_AUTH_URL="https://sitestudio.lt"
ENV BETTER_AUTH_URL=$BETTER_AUTH_URL
ARG BETTER_AUTH_SECRET="build-placeholder-secret-not-for-production"
ENV BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Override invalid placeholder values passed by Coolify during build
RUN BETTER_AUTH_URL="https://sitestudio.lt" BETTER_AUTH_SECRET="build-placeholder-secret-not-for-production-32chars" npm run build

# ---- Runtime ----
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Standalone output only — no full node_modules in the final image.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# Coolify can also use this endpoint for its own health checks.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/api/health >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
