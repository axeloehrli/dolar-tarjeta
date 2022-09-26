server {
        server_name dolartarjeta.com.ar, www.dolartarjeta.com.ar;
        gzip on;
        gzip_proxied any;
        gzip_types application/javascript application/x-javascript text/css text//javascript
        gzip_comp_level 6;
        gzip_buffers 16 8k;
        gzip_min_length 256;

        location /_next/static/ {
                alias /var/www/dolartarjeta.com.ar/.next/static/;
                expires 365d;
                access_log on;
        }
        location / {
                proxy_pass http://127.0.0.1:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.dolartarjeta.com.ar/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.dolartarjeta.com.ar/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}



´


DOLARTARJETA.COM.AR



server {
        server_name dolartarjeta.com.ar, www.dolartarjeta.com.ar;
        gzip on;
        gzip_proxied any;
        gzip_types application/javascript application/x-javascript text/css text//javascript
        gzip_comp_level 6;
        gzip_buffers 16 8k;
        gzip_min_length 256;

        location /_next/static/ {
                alias /var/www/dolartarjeta.com.ar/.next/static/;
                expires 365d;
                access_log on;
        }
        location / {
                proxy_pass http://127.0.0.1:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

    listen 80;
}


API.DOLARTARJETA.COM.AR

server {
  server_name api.dolartarjeta.com.ar;
   location / {
                  proxy_pass http://127.0.0.1:9999;
                  proxy_http_version 1.1;
                  proxy_set_header Upgrade $http_upgrade;#                                            >
                  proxy_set_header Host $host;
                  proxy_cache_bypass $http_upgrade;
            }

  listen 80;

}








