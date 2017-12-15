global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create()
};

$.path.task.forEach(function(tasksPath) {
    require(tasksPath)()
});


$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'scripts',
        'sass',
        'html'
    ),
    $.gulp.parallel(
        'serve',
        'watch'
    )

));