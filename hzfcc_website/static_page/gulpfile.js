var gulp = require('gulp'),
    connect = require('gulp-connect'); //使用connect启动一个Web服务器

var path =  {
    HTML: './src/*.html',
    CSS: './src/css/*.css'
};

gulp.task('connect', function () {
    connect.server({
        port: 8000,
        root: './src',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src(path.HTML)
        .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src(path.CSS)
        .pipe(connect.reload());
});
// gulp.task('js', function () {
//     gulp.src('./src/js/*.js')
//         .pipe(connect.reload());
// });

gulp.task('watch', function () {
    gulp.watch([path.CSS], ['css']);
    // gulp.watch(['./src/js/*.js'], ['js']);
    gulp.watch([path.HTML], ['html']);

});

gulp.task('default', ['connect', 'watch']);
