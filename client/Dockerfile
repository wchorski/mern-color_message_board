FROM node

LABEL version="0.01"
LABEL description="trying..."

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install && npm cache clean --force

COPY . .

ENV REACT_APP_BASE_URL=http://localhost:5000/api

EXPOSE 3000

CMD [ "npm", "start" ]