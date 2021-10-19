# Production Vue App

Let's build and containerize a Vue app!
We want to make this app simple enough for educational purpose, but also to mimic real world scenarios

First we need to create a local vue app:

```bash
npm i -g @vue/cli
npm i -g serve
mkdir vue-app
cd vue-app
vue create my-cool-vue-app
cd my-cool-vue-app
npm run build
serve -n dist
# npm run serve # or node_modules/.bin/vue-cli-service serve
```

open in code

```bash
code ~/dev/vue-app
```

## Create a Dockerfile

```dockerfile
FROM node:12-stretch
RUN npm i serve -g

WORKDIR /code/vue
COPY my-cool-vue-app .

# cached as one layer!
RUN npm ci && npm run build

CMD [ "serve", "dist" ]
```

## Create a .dockerignore file

```dockerfile
node_modules/
dist/
```

## Build and make sure everything is OK

```bash
docker build . -t my-cool-vue-image
docker run --rm -it --name my-cool-vue-container -p 5000:5000 my-cool-vue-image
```

## Multi Stage Builds

```dockerfile

FROM node:12-stretch AS build

WORKDIR /code/vue
COPY my-cool-vue-app .

# cached as one layer!
RUN npm ci && npm run build

FROM nginx:latest
COPY --from=build /code/vue/dist /usr/share/nginx/html
```

Build again

```bash
docker build . -t my-cool-vue-image
docker run --rm -it --name my-cool-vue-container -p 1234:80 my-cool-vue-image
```

## Things get complicated

One day the PM decides that he wants the app to great the client.
Each client will see the exact same app but will be greeted diffrently based on him or hers name on the main page

How can we achieve this?
By passing arguments when we build the image
The frontend app will read an ENV variable from container.

## Create a vue.config.js

```javascript
const MY_COOL_NAME = process.env.MY_COOL_NAME;
console.log("MY_COOL_NAME", MY_COOL_NAME);
module.exports = {
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      const base = args[0]["process.env"];
      args[0]["process.env"] = {
        ...base,
        VUE_APP_MY_COOL_NAME: `"${MY_COOL_NAME}"`,
      };

      return args;
    });
  },
};
```

New Dockerfile:

```dockerfile
FROM node:12-stretch
RUN npm i serve -g

ARG MY_COOL_NAME
ENV MY_COOL_NAME=$MY_COOL_NAME

WORKDIR /code/vue
COPY my-cool-vue-app .

# cached as one layer!
RUN npm ci && npm run build

CMD [ "serve", "dist" ]
```

## Build with args

docker build --build-arg MY_COOL_NAME=bar . -t my-cool-vue-image:2

docker run --rm -it --name my-cool-vue-container -p 5000:5000 my-cool-vue-image:2
