module.exports = function () {
	$.gulp.task('pug',function () {
		return $.gulp.src('src/pug/pages/*.pug') //какие файлы будет брать
			.pipe($.gp.plumber())
			.pipe($.gp.pug({
				pretty:true //чтобы код был НЕ в одну строку
			}))
			.pipe($.gp.plumber.stop())
			.pipe($.gulp.dest('build')) //куда будет складываться наш обрабатываемый файл
			.on('end',$.bs.reload);
	});
}