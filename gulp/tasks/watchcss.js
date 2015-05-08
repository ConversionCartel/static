var gulp = require('gulp');
var connect = require('gulp-connect');

var path = {
	src: './avalon-school/css/*.css'
};

gulp.task('watchCSS', 'Watch for css updates and reload if no sass or less', function(){
	gulp.src(path.src)
		.pipe(connect.reload());
});