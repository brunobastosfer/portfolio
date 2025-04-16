FROM node:20-alpine AS builder

ENV NODE_ENV=build
USER node

# Etapa Core
# WORKDIR /home/node/core
# COPY core/package.json core/package-lock.json ./
# RUN npm ci --strict-peer-deps

# Etapa Backend
WORKDIR /home/node/backend

COPY backend/*.json ./
RUN npm ci

# Copiar todo o código fonte
WORKDIR /home/node
COPY --chown=node:node . .

# Build da aplicação
WORKDIR /home/node/backend
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# ---

FROM node:20-alpine

ENV NODE_ENV=production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/backend/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/backend/dist ./dist

CMD ["node", "dist/backend/src/main.js"]