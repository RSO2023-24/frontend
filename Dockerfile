FROM node as node
WORKDIR /app
COPY . .
RUN npm install

FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html