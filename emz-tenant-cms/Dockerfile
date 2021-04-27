FROM node:12-alpine

ENV APP_PORT=40001

WORKDIR /app

COPY package*.json ./

RUN npm install --silent --progress=false

COPY . .

VOLUME [ "/app" ]

EXPOSE $APP_PORT

CMD npm run serve