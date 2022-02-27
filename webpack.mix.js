const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const { exec } = require('child_process');
// .js('./src/js/main.js', './layouts/partials/js/main.js')

mix.sass('./src/scss/main.scss', './layouts/partials/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
  .after(() => {
      exec('hugo serve --minify');
    });
