module.exports = function () {
	$.gulp.task('serve', function() { //самостоятельное обновление браузера
		$.bs.init({
			server: {
				baseDir: "./build"
			}
		});
	});
}