FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY web/ /usr/share/nginx/html/
COPY translations/ /usr/share/nginx/html/
