const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('transpile', () => {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('static', () => {
    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp
        .src('dist')
        .pipe(clean());
});

gulp.task('build', gulp.series('clean', 'static', 'transpile'));

gulp.task('watch', () => gulp.watch(['src/**/*.ts', 'src/**/*.json'], gulp.series('build')));

gulp.task('default', gulp.parallel('watch'));