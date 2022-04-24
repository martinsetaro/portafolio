 const { src, dest, watch, parallel } = require('gulp');

 const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');




// arrchivo sass
function css(done){
    src('./src/scss/**/*.scss')
    .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(dest('build/css'))
done();
}


// watch de sass
function dev(done){
    watch('./src/scss/**/*.scss', css);
   
    done();
}

//imagenes

function versionWebp(done){
    const opciones = {  
        quality: 50
    };
    src('./src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))

    done();
}

function optimizadorImg(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src('./src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin(opciones) ) )
        .pipe( dest('./build/img') )
    done();
}




exports.optimizadorImg = optimizadorImg;
exports.versionWebp = versionWebp;
exports.css = css;
exports.dev = parallel(optimizadorImg,versionWebp,css,dev)