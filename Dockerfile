# --- Stage 1: Build ---
FROM oven/bun:alpine AS builder
WORKDIR /app

ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build


# --- Stage 2: Production Runner ---
FROM oven/bun:alpine
WORKDIR /app

# Force production mode and network bindings
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["bun", "run", "./build/server/index.js"]