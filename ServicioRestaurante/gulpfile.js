var gulp = require('gulp');
var zip = require('gulp-zip');
 
gulp.task('EmpaquetarRestaurante', function() {
  return gulp.src('src/*')
    .pipe(zip('Servicio_Restaurante.zip'))
    .pipe(gulp.dest('dist'));
});
