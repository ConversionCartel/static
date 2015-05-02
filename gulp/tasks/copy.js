var gulp = require('gulp-help')(require('gulp'));
var debug = require('gulp-debug');

var path = {
	src: ['./avalon-school/**'],
	dest: './build/dist/avalon-school'
};

gulp.task('copy', 'Make a temp copy of avalon-school for zipping', function(){
	gulp.src(path.src)
		.pipe(debug({ title: 'Copying..'}))
		.pipe(gulp.dest(path.dest, { overwrite: false }));
});