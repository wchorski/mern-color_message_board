FROM node:16-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./npm.lock ./

RUN npm install

COPY . .

ENV REACT_APP_BASE_URL=http://localhost:5000/api

EXPOSE 3000

CMD [ "npm", "start" ]