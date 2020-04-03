module.exports = function () {
	$.gulp.task('sass',function () {
		return $.gulp.src('src/static/sass/main.sass') //какие файлы будет брать
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({
				'include css':true
			}))
			.pipe($.gp.autoprefixer({
				cascade: false
			}))
			.on("error", $.gp.notify.onError({ //оповещение об ошибке в коде
				message: "Error: <%= error.message %>",
				title: "stile"
			}))
			.pipe($.gp.plumber())
			.pipe($.gp.csso()) //оптимизирует наш css
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css')) //куда будет складываться наш обрабатываемый файл
			.pipe($.bs.reload({
				stream:true
			}));
	})
}