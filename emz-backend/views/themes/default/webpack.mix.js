const mix = require('laravel-mix');


mix.autoload({
    jquery: ['$', 'window.jQuery']
});

mix.extract(['jquery']);

mix.js('assets/js/app.js', 'public/js')
   .sass('assets/scss/app.scss', 'public/css');
