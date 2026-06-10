FROM oven/bun:latest
WORKDIR /app

ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY

COPY package.json bun.lock ./
RUN bun install

COPY . .
RUN bun run build

EXPOSE 5173

CMD ["bun", "run", "server.ts"]