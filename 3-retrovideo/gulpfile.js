'use strict';

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    eslint = require('gulp-eslint'),
    webpack = require('gulp-webpack'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    prefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


var config = {
    client: {
        port: 8080,
        files: './client/**/*',
        server: './public/'
    },
    from: {
        stylus_common: "./client/stylus/style.styl",
        stylus: "./client/stylus/**/*.styl",
        js: ["./client/js/**/*.js", "./client/templates/**/*", '!node_modules/**', '!client/js/bower/**/*'],
        img: "./client/img/**/*",
        media: "./client/media/**/*",
        pug_common: "./client/pages/**/*.pug",
        pug: ["./client/pages/**/*.pug", "./client/pug/**/*.pug"]
    },
    to: {
        css: "./public/css/",
        js: "./public/js/",
        img: "./public/img/",
        media: "./public/media/",
        html: "./public/"
    }
};

gulp.task('client', ['pug', 'stylus', 'js', 'images', 'media', 'client-sync'], function() {
    gulp.watch(config.from.pug, ['pug']);
    gulp.watch(config.from.stylus, ['stylus']);
    gulp.watch(config.from.js, ['js']);
    gulp.watch(config.from.img, ['images']);
    gulp.watch(config.from.media, ['media']);
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
            notify: false,
            server: config.client.server,
            files: config.client.files,
            port: config.client.port
        });
    })
    .task('stylus', function() {
        gulp.src(config.from.stylus_common)
            .pipe(stylus())
            .on('error', console.log)
            .pipe(prefixer())
            .pipe(csso())
            .pipe(gulp.dest(config.to.css))
            .pipe(reload({
                stream: true
            }));
    })
    .task('js', function() {
        gulp.src(config.from.js)
            .pipe(webpack({
                module: {
                    loaders: [{
                        test: /\.jsx?$/,
                        loader: 'babel?presets[]=es2015'
                    }, {
                        test: /\.hbs$/,
                        loader: 'handlebars-loader'
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
    .task('media', function () {
        gulp.src(config.from.media)
            .pipe(gulp.dest(config.to.media))
            .pipe(reload({
                stream: true
            }));
    })
    .task('images', function() {
        gulp.src(config.from.img)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }],
                use: [pngquant()],
                interlaced: true
            }))
            .pipe(gulp.dest(config.to.img))
            .pipe(reload({
                stream: true
            }));
    });
