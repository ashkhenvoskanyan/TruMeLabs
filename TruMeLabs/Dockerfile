FROM nginx

COPY  /infra/nginx.conf /etc/nginx/nginx.conf
COPY  /infra/default.conf /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html


EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]trails