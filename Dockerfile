# --- Stage 1: Build ---
FROM oven/bun:alpine AS builder
WORKDIR /app

# Accept build arguments for Supabase
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY

# Install all dependencies (including dev dependencies needed for the build)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of the code and build the React Router app
COPY . .
RUN bun run build


# --- Stage 2: Production Runner ---
FROM oven/bun:alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy package files and install ONLY production dependencies to keep the image tiny
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# Copy the build artifacts from the builder stage
COPY --from=builder /app/build ./build

# React Router usually defaults to port 3000
EXPOSE 3000

# Run the standard start script defined in your package.json
CMD ["bun", "run", "start"]