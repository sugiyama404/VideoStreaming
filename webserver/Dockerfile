# For development phase
FROM node:18.15-buster-slim as development
WORKDIR /app/myapp

ENV PORT=80

ENV CHOKIDAR_USEPOLLING=true
ENV APSERVER_HOST=apserver

COPY ./myapp/package*.json ./
RUN npm install
COPY ./myapp .
