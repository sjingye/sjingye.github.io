var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ['./*.html', 'css/*.css']
    });
});
gulp.task('reload',function(){
    browserSync.reload();
});
gulp.task('watch', function() {
    gulp.watch('./*.html');
    gulp.watch('sass/*.scss'/*, ['sass']*/)
})
