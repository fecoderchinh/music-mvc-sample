# Nginx config
```
server {
    listen          80;             # the port nginx is listening on
    server_name     emz.localhost;    # setup your domain here

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    location / {
        expires $expires;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass http://127.0.0.1:8888; # NuxtJs
    }
}

server {
    listen          80;             # the port nginx is listening on
    server_name     api.emz.localhost;    # setup your domain here

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    location / {
    
        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header x-tenant-id        $http_origin;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass http://127.0.0.1:3000; # NestJs
    }
}


server {
    listen          80;             # the port nginx is listening on
    server_name     sumishop.emz.localhost;    # setup your domain here

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    proxy_redirect                      off;
    proxy_set_header x-tenant-id        $http_origin;
    proxy_set_header Host               $host;
    proxy_set_header X-Real-IP          $remote_addr;
    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto  $scheme;
    proxy_read_timeout          1m;
    proxy_connect_timeout       1m;
    
    location / {
        proxy_pass http://127.0.0.1:8001; # NestJs
    }

    location /admin/ {
        proxy_pass http://127.0.0.1:40001/admin/; # VueJs
    }
}

```

# Edit hosts file

127.0.0.1 emz.localhost *.emz.localhost


# Mongo Replication

```
rs.initiate( {
   _id : "rs0",
   members: [
      { _id: 0, host: "127.0.0.1:27017" },
      { _id: 1, host: "127.0.0.1:27018" },
      { _id: 2, host: "127.0.0.1:27019" }
   ]
})

```