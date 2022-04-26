FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./npm.lock ./

RUN npm

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]