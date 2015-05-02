var gulp = require('gulp');
var connect = require('gulp-connect');

var path = {
	src: './avalon-school/js/**/*.js'
};

gulp.task('watchJS', 'Watch JS files for changes and reload them', function(){
	gulp.src(path.src)
		.pipe(connect.reload());
});