module.exports = function () {
	$.gulp.task('img:dev',function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}') //какие файлы будет брать
			.pipe($.gulp.dest('build/static/img/'));
	});

	$.gulp.task('img:build',function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}') //какие файлы будет брать
			.pipe($.gp.tinypng('ynZbkzctr0gTDZMDXQt0hj91Lc4mPzXJ'))
			.pipe($.gulp.dest('build/static/img/'));
	});
};
