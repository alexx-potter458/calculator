FROM node:alpine

WORKDIR /server

RUN apt-get -y update && apt-get -y install nginx

COPY . ./server/

FROM nginx:1.16.0-alpine
COPY ./build /usr/share/nginx/html

EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
