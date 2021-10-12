FROM node:12-stretch

WORKDIR /code/react

COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "npm", "start" ]