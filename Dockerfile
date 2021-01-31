FROM node:14-alpine AS builder

WORKDIR '/app'

COPY package.json ./

RUN npm install

COPY . .

RUN npx webpack

FROM httpd:2.4-alpine

COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/
