FROM node:12-stretch
RUN npm i serve -g

ARG MY_COOL_COLOR
ENV MY_COOL_COLOR=$MY_COOL_COLOR

WORKDIR /code/vue
COPY my-cool-vue-app .

# cached as one layer!
RUN npm ci && npm run build

CMD [ "serve", "dist" ]
# CMD [ "echo", "'$MY-COOL-ARG'" ]
# docker build --build-arg MY-COOL-ARG=swed24sw . -t my-cool-vue-image