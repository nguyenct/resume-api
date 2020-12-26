FROM node:14.15.1 AS build-library
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:14.15.1 AS development
WORKDIR /app
CMD ["npm", "run", "start:dev"]

FROM node:14.15.1-alpine AS production
WORKDIR /app
COPY --from=build-library /app ./
CMD ["npm", "run", "start:prod"]
