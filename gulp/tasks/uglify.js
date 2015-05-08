var gulp = require('gulp-help')(require('gulp'));
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');
var handleErrors = require('../util/handleErrors');

/**
 * NOTE: Excluding vendor.js from minifying. Weird stuff could happen
 */
var paths = {
	js: ['./avalon-school/js/*.js', '!./avalon-school/js/vendor.js', '!./avalon-school/js/html5shiv.js'],
	dest: './build/dist/avalon-school/js'
};

gulp.task('uglify', 'Uglify JS files', function(doneMinJS) {
	//Race condition work around
	setTimeout(function(){
		gulp.src(paths.js)
			.pipe(debug({ title: 'Uglifying...' }))
			.pipe(uglify())
				.on('error', handleErrors)
			.pipe(gulp.dest(paths.dest));
		doneMinJS();
	}, 1000);
});