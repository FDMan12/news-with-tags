FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
ENV HOST=0.0.0.0
CMD ["npm", "run", "serve"]

