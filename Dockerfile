# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

# Production stage
FROM oven/bun:1-slim

WORKDIR /app

ENV NODE_ENV=production

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["bun", "run", "start"]