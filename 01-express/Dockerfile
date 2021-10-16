FROM node:12-stretch

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm ci

COPY index.js ./index.js

CMD [ "node", "index.js" ]
