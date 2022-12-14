# syntax=docker/dockerfile:1

FROM node:19.2-slim

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN ls

RUN npm install --production

COPY . .

CMD [ "node", "deploy-commands.js" ]

CMD [ "node", "index.js" ]
