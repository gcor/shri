'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    csso = require('gulp-csso'),
    shell = require('gulp-shell'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    webpack = require('gulp-webpack'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    pngquant = require('imagemin-pngquant'),
    prefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

var config = {
    client: {
        port: 8080,
        files: './src/**/*',
        server: './www/'
    },
    from: {
        stylus_common: "./src/stylus/style.styl",
        stylus: "./src/stylus/**/*.styl",
        js: ["./src/js/**/*.js", "./src/templates/**/*", '!node_modules/**', '!src/js/bower/**/*'],
        img: "./src/img/**/*",
        pug_common: "./src/pages/*.pug",
        pug: ["./src/pages/**/*.pug", "./src/pug/**/*.pug"]
    },
    to: {
        css: "./www/css/",
        js: "./www/js/",
        img: "./www/img/",
        html: "./www/"
    }
};

gulp.task('w', ['pug', 'stylus', 'js', 'images', 'client-sync'], function() {
    gulp.watch(config.from.pug, ['pug']);
    gulp.watch(config.from.stylus, ['stylus']);
    gulp.watch(config.from.js, ['js']);
    gulp.watch(config.from.img, ['images']);
});

gulp
    .task('pug', function() {
        gulp.src(config.from.pug_common)
            .pipe(pug({
                pretty: true
            }))
            .on('error', console.log)
            .pipe(gulp.dest(config.to.html))
            .pipe(reload({
                stream: true
            }));
    })
    .task('client-sync', function() {
        browserSync.init(null, {
            open: false,
            notify: false,
            server: config.client.server,
            files: config.client.files,
            port: config.client.port
        });
        // shell.task(['phonegap serve'])()
    })
    .task('stylus', function() {
        gulp.src(config.from.stylus_common)
            .pipe(plumber())
            .pipe(sourcemaps.init())
                .pipe(stylus())
                .on('error', console.log)
                .pipe(prefixer())
                .pipe(csso())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.to.css))
            .pipe(reload({
                stream: true
            }));
    })
    .task('js', function() {
        gulp.src(config.from.js)
            .pipe(plumber())
            .pipe(webpack({
                module: {
                    loaders: [{
                        test: /\.jsx?$/,
                        loader: 'babel?presets[]=es2015'
                    }]
                },
                output: {
                    filename: "app.js"
                }
            }))
            .pipe(uglify())
            .pipe(gulp.dest(config.to.js))
            .pipe(reload({
                stream: true
            }));
    })
    .task('images', function() {
        gulp.src(config.from.img)
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(config.to.img))
            .pipe(reload({
                stream: true
            }));
    });
