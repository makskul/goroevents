const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function compileSass() {
    return gulp.src('./src/**/main.scss') // Path to your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist')); // Output directory for CSS files
}
gulp.task('sass', compileSass);

function watchSass() {
    gulp.watch('./src/**/*.scss', compileSass);
}
gulp.task('watch', watchSass);

gulp.task('styles', function () {
    return gulp.src('./src/**/main.scss')  // Adjust the path to your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '_new.min' }))
        .pipe(gulp.dest('dist/css'));  // Adjust the output path if needed
});
gulp.task('fonts', function () {
    return gulp.src('./src/**/fonts.scss')  // Adjust the path to your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));  // Adjust the output path if needed
});


