FROM node:16.16.0 as build

WORKDIR /app

COPY package*.json .
RUN npm install -f
COPY . .
RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html