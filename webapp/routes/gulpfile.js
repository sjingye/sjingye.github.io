'use strict';

let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task('sass', function (){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./dist/css"));
});
gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*', ['sass']); 
});
gulp.task('default', ['watch','sass']);
