## Containerize a React app for production

First create a simple React app, build it and sure it runs ok.

```bash
npx create-react-app my-cool-react-app
cd my-cool-react-app
npm run build
npx serve ./build  # see all is ok

```

Now it's time to containerize!
Your goal is to write a multi-stage build.
First stage is the build stage, second is the runtime stage.
use nginx to serve the files.
All you need to know about nginx for this task is this: nginx serves the contents of /usr/share/nginx/html by default at port 80.

// to be continued!!!

#### Create a Dockerfile

```bash
docker build -t my-cool-react-image .
docker run --init --name my-cool-react-container -p 80:80 my-cool-react-image
```

go to locaclhost to see the reat-app

```bash
npm run build
npx serve -s --help
➜ npx serve -s build # make sure everything okay in localhost:3000
```

create a Dockerfile inside my-cool-react-app

```bash
docker build -t my-cool-react-development .
# docker run --init -dit -p 3000:3000 my-cool-react-development
docker run--init -d -p 3000:3000 my-cool-react-development
docker run --name react-v1 --init -d -p 3000:3000 my-cool-react-development
```
