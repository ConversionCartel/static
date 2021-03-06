var gulp = require('gulp-help')(require('gulp'));
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jsonlint = require('gulp-jsonlint')
var debug = require('gulp-debug');

gulp.task('lint', 'Lint JS files', function(){
	gulp.src('./avalon-school/js/*.js')
		.pipe(debug({title: 'Linting: '}))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))

	gulp.src('./avalon-school/meta/template.json')
		.pipe(debug({title: 'Linting: '}))
		.pipe(jsonlint())
		.pipe(jsonlint.reporter())
});
