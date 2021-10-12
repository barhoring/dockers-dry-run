## Containerize a React for development

Create React app for development

```bash
npx create-react-app my-cool-react-app
cd my-cool-react-app && npm start # see all is ok

```

create a Dockerfile inside my-cool-react-app

```bash
docker build -t react-development .
docker run --rm --init -it -p 3000:3000 react-development
```
