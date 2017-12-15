module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./source/style/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./source/*.html', $.gulp.series('html'));
        // $.gulp.watch('./source/lib/*.js', $.gulp.series('js'))
    });
};