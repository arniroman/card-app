module.exports = function() {
    $.gulp.task('scripts', function() {
        return $.gulp.src(['./node_modules/angular/angular.min.js',
                            './source/js/app.js',
                            './source/js/controllers/cardNumCtrl.js',
                            './source/js/controllers/cardNameCtrl.js',
                            './source/js/controllers/cardExpiryCtrl.js',
                            './source/js/controllers/cardCvcCtrl.js'
            ])
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