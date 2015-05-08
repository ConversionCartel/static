var gulp = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');

gulp.task('connect', 'Connect LiveReload', function() {
  connect.server({
    root: 'avalon-school',
    livereload: true
  });
});