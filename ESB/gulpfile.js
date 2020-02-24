var gulp = require('gulp');
var zip = require('gulp-zip');
 
gulp.task('EmpaquetarESB', function() {
  return gulp.src('src/*')
    .pipe(zip('ESB.zip'))
    .pipe(gulp.dest('dist'));
});
