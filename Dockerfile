FROM node:18-alpine AS base

WORKDIR /app
RUN npm i -g pnpm
COPY pnpm-lock.yaml ./
RUN pnpm fetch

COPY . .

FROM base AS build-backend

WORKDIR /app

RUN pnpm install -r --offline --filter ./backend
RUN pnpm run --filter ./backend build

RUN rm -rf ./node_modules
RUN rm -rf ./backend/node_modules
RUN pnpm install -r --offline --prod --filter ./backend

FROM node:18-alpine AS deploy-backend

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build-backend /app/node_modules/ ./node_modules
COPY --from=build-backend /app/backend/node_modules ./backend/node_modules
COPY --from=build-backend /app/backend/dist ./backend/dist

CMD ["node", "backend/dist/index.mjs"]

FROM base AS build-frontend

WORKDIR /app

COPY . .

RUN pnpm install -r --offline --filter ./frontend
RUN pnpm run --filter ./frontend build

FROM nginx:1.23.3-alpine-slim AS deploy-frontend

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-frontend /app/frontend/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]