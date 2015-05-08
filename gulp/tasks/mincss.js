var gulp = require('gulp-help')(require('gulp'));
var minify = require('gulp-cssmin');
var stripComments = require('gulp-strip-comments');
var debug = require('gulp-debug');
var handleErrors = require('../util/handleErrors');

/**
 * NOTE: Excluding vendor.css from minifying. Weird stuff could happen
 */
var paths = {
	cssFiles: ['./avalon-school/css/*.css', '!./avalon-school/css/vendor.css'],
	dest: './build/dist/avalon-school/css'
};

gulp.task('mincss', 'Minify CSS', function(){
	//Race condition work around
	setTimeout(function(){
		gulp.src(paths.cssFiles)
			.pipe(debug({ title: 'Minifying: ' }))
			.pipe(stripComments())
				.on('error', handleErrors)
			.pipe(minify())
				.on('error', handleErrors)
	    	.pipe(gulp.dest(paths.dest));
	},500);
});