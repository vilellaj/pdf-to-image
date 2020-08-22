FROM node:14.8.0-alpine3.10

RUN apk add graphicsmagick
RUN apk add ghostscript

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node" , "index.js"]