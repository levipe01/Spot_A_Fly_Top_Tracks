FROM node:lts-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install -p && npm run build

EXPOSE 3003

CMD [ "npm", "start" ]