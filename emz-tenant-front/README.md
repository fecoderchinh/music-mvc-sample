# Hướng dẫn cài đặt

## Chạy server
```bash 
cd tenant-front

# Cài đặt thư viện
npm install

# Chạy để build server code
npm run start:dev 
```

## Chạy code giao diện
```bash 
cd tenant-front/views/themes/default

# Cài đặt thư viện
npm install

# Chạy để build js và css
npm run watch 
```

## Code CSS và JS

Code js và scss nằm trong folder: tenant-front/views/themes/default/assets

## Code Server điều hướng
```bash
#File tenant-front/src/app.controller.ts
@Get('ROUTER')
@Render('VIEW_PATH_FILE')
index() {
  return { title: 'This is home page!' };
}

#ROUTER: Là link điều hướng ví dụ @Get('/about')
#VIEW_PATH_FILE: Là file view template ví dụ: pages/about

```
