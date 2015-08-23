var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
    browserSync({
        open: false,
        reloadOnRestart: true,
        server: {
            baseDir: [ 'www' ],
            routes : {
                '/elements' : './elements',
                '/bower_components' : './bower_components'
            }
        }
    });

    gulp.watch(['elements/*'], reload);
});
