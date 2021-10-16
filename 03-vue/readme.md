Time to create a Vue app

```bash
npm i -g @vue/cli
vue create my-project
cd my-project
npm run serve # or node_modules/.bin/vue-cli-service serve
```

create a vue.config.js

## Build with args

docker build --build-arg MY_COOL_COLOR= . -t my-cool-vue-image:1
docker build --build-arg MY_COOL_COLOR=pink . -t my-cool-vue-image:2

docker run --rm -it --name my-cool-vue-container -p 5000:5000 my-cool-vue-image:2

```bash
docker build -t my-cool-vue-image .

```
