var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

var srcPath = './public/scss';
var destPath = './public/css';

// Compile less
gulp.task('sass', function() {
    return gulp.src([srcPath + '/*.scss'])
        .pipe(watch([srcPath + '/*.scss']))
        .pipe(sass())
        .pipe(gulp.dest(destPath));
});