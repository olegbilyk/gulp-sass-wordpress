/*!
 * @name        Gulp Sass Wordpress Configuration
 * @author      Oleg Bilyk <https://www.linkedin.com/in/oleg-bilyk-3a6817b5/>
 * @version     1.0.0
 *
'use strict';

// Require plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const autoPrefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const notify = require('gulp-notify');
const _if = require('gulp-if');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

// Theme sources
const themeName = 'themeName';
const themeUrl = 'themeUrl';
const themePort = 8080;

// It is activated plugins
const isAutoPrefixer = true;
const isSourceMaps = true;
const isBrowserSync = true;
const notifyComplete = false;

// Style SASS task
gulp.task('sass', function () {
  return gulp.src('wp-content/themes/' + themeName + '/assets/sass/style.scss')
    .pipe(_if(isSourceMaps && gutil.env.type === 'dev', sourceMaps.init()))
    .pipe(sass({outputStyle: 'expanded'}))
    .on('error', notify.onError(function (err) {
      return {
        title: 'Styles',
        message: err.message
      }
    }))
    .pipe(_if(isSourceMaps && gutil.env.type === 'dev', sourceMaps.write({includeContent: false})))
    .pipe(_if(isAutoPrefixer, autoPrefixer({
      browsers: ['last 3 versions'],
      cascade: false
    })))
    .pipe(rename('style.css'))
    .pipe(_if(isBrowserSync, browserSync.reload({stream: true})))
    .pipe(gulp.dest('wp-content/themes/' + themeName))
    .pipe(_if(notifyComplete || gutil.env.type === 'prod', notify({message: 'Styles task complete', onLast: true})))
});

// Browser Sync task
gulp.task('browser-sync', function () {
  var files = [
    'wp-content/themes/**/*.php',
    'wp-content/themes/' + themeName + '/assets/css/**/*.css'
  ];

  browserSync.init(files, {
    proxy: themeUrl,
    port: themePort,
    injectChanges: true
  });
});

// Watch task
gulp.task('watch', ['sass', 'browser-sync'], function () {
  gulp.watch('wp-content/themes/' + themeName + '/assets/sass/**', ['sass']);
});
