'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('build', function() {
    var babel_options = {
        blacklist: ['strict']
    }
    gulp.src('src/permalink_normalization.js')
        .pipe($.babel(babel_options))
        .pipe(gulp.dest('lib'));
});