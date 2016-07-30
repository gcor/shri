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
    mainBowerFiles = require('main-bower-files'),
    browserSync = require('browser-sync').create(),
    splashiconGenerator = require("splashicon-generator"),
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
        media: "./src/media/**/*",
        pug_common: "./src/pages/*.pug",
        pug: ["./src/pages/**/*.pug", "./src/pug/**/*.pug"],
        icon: '',
    },
    to: {
        css: "./www/css/",
        js: "./www/js/",
        img: "./www/img/",
        media: "./www/media/",
        html: "./www/"
    }
};

gulp.task('gap', ['pug', 'stylus', 'js', 'bower', 'splashicon', 'images', 'media', 'client-sync'], function() {
    gulp.watch(config.from.pug, ['pug']);
    gulp.watch(config.from.stylus, ['stylus']);
    gulp.watch(config.from.js, ['js']);
    gulp.watch(config.from.img, ['images']);
});

gulp
    .task('pug', function() {
        gulp.src(config.from.pug_common)
            .pipe(pug())
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
        shell.task(['phonegap build browser', 'phonegap serve'])()
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
    .task('media', function() {
        gulp.src(config.from.media)
            .pipe(gulp.dest(config.to.media))
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
    })
    .task('splashicon', function(done) {
        splashiconGenerator.generate()
            .then(function() {
                const options = {
                    ICON_FILE: 'src/img/icon.png',
                    SPLASH_FILE: 'src/img/splash.png',
                    ICON_PLATFORMS: [{
                        name: 'android',
                        iconsPath: 'res/icons/android/',
                        isAdded: true,
                        icons: [
                            { name: 'icon-36-ldpi.png', size: 36, density: 'ldpi' },
                            { name: 'icon-48-mdpi.png', size: 48, density: 'mdpi' },
                            { name: 'icon-72-hdpi.png', size: 72, density: 'hdpi' },
                            { name: 'icon-96-xhdpi.png', size: 96, density: 'xhdpi' },
                            { name: 'icon-144-xxhdpi.png', size: 144, density: 'xxhdpi' },
                            { name: 'icon-192-xxxhdpi.png', size: 192, density: 'xxxhdpi' },
                        ]
                    }],
                    SPLASH_PLATFORMS: [{
                        name: 'android',
                        isAdded: true,
                        splashPath: 'res/screens/android/',
                        splash: [
                            { name: "screen-ldpi-portrait.png", width: 320, height: 426, density: "port-ldpi" },
                            { name: "screen-ldpi-landscape.png", width: 426, height: 320, density: "land-ldpi" },
                            { name: "screen-hdpi-portrait.png", width: 480, height: 640, density: "port-hdpi" },
                            { name: "screen-hdpi-landscape.png", width: 640, height: 480, density: "land-hdpi" },
                            { name: "screen-mdpi-portrait.png", width: 320, height: 470, density: "port-mdpi" },
                            { name: "screen-mdpi-landscape.png", width: 470, height: 320, density: "land-mdpi" },
                            { name: "screen-xhdpi-portrait.png", width: 720, height: 960, density: "port-xhdpi" },
                            { name: "screen-xhdpi-landscape.png", width: 960, height: 720, density: "land-xhdpi" },
                            { name: "screen-xxhdpi-portrait.png", width: 960, height: 1600, density: "port-xxhdpi" },
                            { name: "screen-xxhdpi-landscape.png", width: 1600, height: 960, density: "land-xxhdpi" },
                            { name: "screen-xxxhdpi-portrait.png", width: 1280, height: 1920, density: "port-xxhdpi" },
                            { name: "screen-xxxhdpi-landscape.png", width: 1920, height: 1280, density: "land-xxhdpi" }
                        ]
                    }]
                };
                splashiconGenerator.generate(options).then(function() {
                    done();
                });
            });
    })
    .task('bower', function() {
        return gulp.src(mainBowerFiles({
                overrides: {
                    Framework7: {
                        main: [
                            './dist/js/framework7.min.js',
                            './dist/css/framework7.material.colors.min.css',
                            './dist/css/framework7.material.min.css'
                        ]
                    }
                }
            }))
            .pipe(gulp.dest('./www/bower/'))
    })
