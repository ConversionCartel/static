var gulp = require('gulp');

var fs = require('fs');
var exec = require('child_process').exec;

var paths = ['./build/dist/avalon-school/**/*'];

gulp.task('zip',['copy', 'uglify', 'mincss']);