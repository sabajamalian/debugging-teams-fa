FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY htmls/ /usr/share/nginx/html/
