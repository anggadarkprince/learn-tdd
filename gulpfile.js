// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Development Dependencies
var jshint = require('gulp-jshint');

// Test Dependencies
var mocha = require('gulp-mocha');

gulp.task('lint-src', function () {
    return gulp.src('./src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function () {
    return gulp.src('./test/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify-src', ['lint-src'], function () {
    return gulp.src('./src/main.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(rename('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('browserify-test', ['lint-test'], function () {
    return gulp.src('./test/**/*.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(rename('bundle-test.js'))
        .pipe(gulp.dest('build'))
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['html', 'browserify-src', 'browserify-test'], function () {
    gulp.watch('src/**/*.js', ['browserify-src']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('test/**/*.js', ['browserify-test']);
});