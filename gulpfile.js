'use strict';

const ghPages = require('gh-pages');
const path = require('path');

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) { //циклом прошли по массиву из файла tasks.js
	require(taskPath)();
});


$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts','img:dev','svg'),
	$.gulp.parallel('watch', 'serve')
));


$.gulp.task('build',$.gulp.series(
	$.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts','img:build','svg'),
	$.gulp.parallel('watch', 'serve')
));


function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;