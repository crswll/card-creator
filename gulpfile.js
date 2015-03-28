var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

var path = {
  styles: {
    in: 'src/scss/**/*.scss',
    out: 'build'
  },
  scripts: {
    watch: 'build'
  }
};

gulp.task('styles', function () {
  return gulp.src(path.styles.in)
    .pipe($.sourcemaps.init())
      .pipe($.sass({
        onError: console.error.bind(console, 'Sass:')
      }))
      .pipe($.autoprefixer())
      .pipe($.minifyCss())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(path.styles.out))
    .pipe($.livereload());
});

gulp.task('watch', ['default'], function () {

  $.livereload.listen();

  gulp.watch(path.styles.in, ['styles']);
  gulp.watch('build/**/*{js,css}').on('change', function (file) {
    $.livereload.changed(file.path);
  });
});

gulp.task('default', ['styles']);