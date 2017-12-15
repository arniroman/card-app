module.exports = function() {
    $.gulp.task('scripts', function() {
        return $.gulp.src(['./node_modules/angular/angular.min.js', './source/js/app.js', './source/js/controllers/cardNumCtrl.js'])
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'angular',
                    message: error.message
                }

            }))
            .pipe($.gp.concat('app.js'))
            .pipe($.gulp.dest('./build/js/'))
    })
}