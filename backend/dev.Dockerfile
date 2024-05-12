FROM node:22.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .