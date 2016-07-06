'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    hypher = require('gulp-hypher'),
    hypherRU = require('hyphenation.ru'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
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
        less_common: "./client/less/*.less",
        less: "./client/less/**/*.less",
        img: "./client/img/**/*",
        jade_common: "./client/pages/**/*.jade",
        jade: ["./client/pages/**/*.jade", "./client/jade/**/*.jade"]
    },
    to: {
        css: "./public/css/",
        img: "./public/img/",
        html: "./public/"
    }
};

gulp.task('client', ['jade', 'less', 'images', 'client-sync'], function () {
    gulp.watch(config.from.jade, ['jade']);
    gulp.watch(config.from.less, ['less']);
    gulp.watch(config.from.img, ['images']);
});

gulp
    .task('jade', function () {
        gulp.src(config.from.jade_common)
            .pipe(jade({
                pretty: true
            }))
            .on('error', console.log)
            .pipe(hypher(hypherRU))
            .pipe(gulp.dest(config.to.html))
            .pipe(reload({
                stream: true
            }));
    })
    .task('client-sync', function () {
        browserSync.init(null, {
            // open: false,
            notify: false,
            server: config.client.server,
            files: config.client.files,
            port: config.client.port
        });
    })
    .task('less', function () {
        gulp.src(config.from.less_common)
            .pipe(less())
            .on('error', console.log)
            .pipe(prefixer())
            .pipe(csso())
            .pipe(gulp.dest(config.to.css))
            .pipe(reload({
                stream: true
            }));
    })
    .task('images', function () {
        gulp.src(config.from.img)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }],
                interlaced: true
            }))
            .pipe(gulp.dest(config.to.img))
            .pipe(reload({
                stream: true
            }));
    });