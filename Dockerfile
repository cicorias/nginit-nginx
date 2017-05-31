FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html
COPY ./nginx/loadEnvAndRun.sh /root/loadEnvAndRun.sh
RUN chmod 0555 /root/loadEnvAndRun.sh

ENTRYPOINT ["sh", "/root/loadEnvAndRun.sh"]
