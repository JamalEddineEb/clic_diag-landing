# --- Stage 1: Build ---
FROM oven/bun:latest AS builder
WORKDIR /app

# Pass ARGs so Vite can embed them during the build
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY

# Copy lockfile and package.json first to leverage Docker caching
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of the code and build
COPY . .
RUN bun run build

# --- Stage 2: Serve ---
FROM nginx:alpine

# Copy only the compiled static assets from the builder stage
# Note: Vite outputs to 'dist' by default. Change to 'build' if needed.
COPY --from=builder /app/build /usr/share/nginx/html

# Expose standard web port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]