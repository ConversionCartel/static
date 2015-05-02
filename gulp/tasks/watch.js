var gulp = require('gulp-help')(require('gulp'));
var yargs = require('yargs').argv;
var gulpif = require('gulp-if');

var paths = {
	templateFiles: './avalon-school/**/*',
	htmlFiles: './avalon-school/*.html',
	cssFiles: './avalon-school/css/*.css',
	jsFiles: './avalon-school/js/*.js'
};

gulp.task('watch', 'Watch for html/scss/less changes and refresh with LiveReload. ', function () {

  	gulp.watch([paths.htmlFiles], ['html']);

  	gulp.watch([paths.templateFiles], ['build']);
  	gulp.watch([paths.cssFiles], ['watchCSS']);
  	gulp.watch([paths.jsFiles], ['watchJS'])

	//Runs copy, mincss & uglify
	gulp.watch([paths.templateFiles], ['zip']);

});