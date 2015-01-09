var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var handleErrors = require('../util/handleErrors');

gulp.task('concat', function () {

	gulp.src(['./scripts/vendor/**/*.js'])
		.pipe(concat('vendor.js'))
    	.on('error', handleErrors)
		.pipe(gulp.dest('./leadpages-template/js'))
		.pipe(connect.reload());

	gulp.src([,'./scripts/scripts-header.js','./scripts/app/**/!(scripts-footer)*.js','./scripts/scripts-footer.js'])
		.pipe(concat('functions.js'))
    	.on('error', handleErrors)
		.pipe(gulp.dest('./leadpages-template/js'))
		.pipe(connect.reload());
});