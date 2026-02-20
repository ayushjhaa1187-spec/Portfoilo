FROM node:20-alpine AS builder

WORKDIR /app
COPY portfolio/server/package*.json ./
RUN npm install

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY portfolio/server/ ./

EXPOSE 5000
CMD ["node", "server.js"]
