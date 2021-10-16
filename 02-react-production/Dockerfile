# build stage
FROM node:12-stretch AS my-cool-react-build
WORKDIR /code/react
COPY my-cool-react-app .

# cached as one layer
RUN npm ci && npm run build

# runtime stage
FROM nginx:latest
COPY --from=my-cool-react-build /code/react/build /usr/share/nginx/html
# nginx has its own CMD by default to serve files

