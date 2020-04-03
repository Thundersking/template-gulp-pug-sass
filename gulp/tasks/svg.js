module.exports = function() {
	$.gulp.task('svg', () => {
		return $.gulp.src('./src/static/img/svg/*.svg') //откуда берем svg 
			.pipe($.gp.svgmin({ //минифицирует svg
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.gp.cheerio({ //ищет в svg строки fill, stroke, и style и удаляет, для того чтобы можно было навешивать стили
				run: function($) {
					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe($.gp.replace('&gt;', '>')) //дорабатывает плагин выше
			.pipe($.gp.svgSprite({ //собирает все svg в один файл (спрайт)
				mode: {
					symbol: {
						sprite: 'sprite.svg'
					}
				}
			}))
			.pipe($.gulp.dest('./build/static/img/svg/'));
	});
};