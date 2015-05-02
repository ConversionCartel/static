var gulp = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');
var debug = require('gulp-debug');

gulp.task('html', 'Watch index.html with LiveReload', function () {

  gulp.src('./avalon-school/*.html')
  	.pipe(debug({title: 'Reloading: '}))
    .pipe(connect.reload())
});
