'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    csso = require('gulp-csso');

var bc = './bower_components/';

gulp.task('js', function() {
  gulp.src('public/develop/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/production/js/'))
});


gulp.task('sass', function () {
  gulp.src('public/develop/styles/**/*')
      .pipe(sass())
      .pipe(concat('main-theme.min.css'))
      .pipe(csso())
      .pipe(gulp.dest('public/production/styles/'));
});

gulp.task('img', function() {
  gulp.src('public/develop/images/**/*')
    .pipe(gulp.dest('public/production/images/'));
});

gulp.task('watch', function() {
  gulp.watch('public/develop/js/**/*.js', ['js']);
  gulp.watch('public/develop/styles/**/*.scss', ['sass']);
  gulp.watch('public/develop/images/**/*', ['img']);
});

gulp.task('libs', function() {
  //gulp.src(bc+'jquery/dist/jquery.js')
  //    .pipe(gulp.dest('./public/compiled/libs/jquery/'));
  //
  gulp.src(bc+'bootstrap/dist/**/*.*')
      .pipe(gulp.dest('./public/production/libs/bootstrap/'));

  gulp.src([bc+'angular/angular.js',
            //bc+'angular-animate/angular-animate.js',
            //bc+'angular-cookies/angular-cookies.js',
            //bc+'angular-i18n/angular-locale_ru-ru.js',
            //bc+'angular-loader/angular-loader.js',
            bc+'angular-resource/angular-resource.js',
            //bc+'angular-route/angular-route.js',
            bc+'angular-sanitize/angular-sanitize.js',
            //bc+'angular-touch/angular-touch.js',
            //bc+'angular-ui-router/release/angular-ui-router.js',
            //bc+'angular-jwt/dist/angular-jwt.js',
            bc+'a0-angular-storage/dist/angular-storage.js',
          ])
      .pipe(concat('angular.concat.js'))
      .pipe(gulp.dest('./public/production/libs/angular/'));
});

//gulp.task('webserver', function() {
//  gulp.src('public/compiled/')
//      .pipe(webserver({
//        livereload: true,
//        open: false
//      }));
//});

gulp.task('default', [
  'libs',
  'img',
  'js',
  'sass',
  //'webserver',
  'watch'
]);