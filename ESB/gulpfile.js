var gulp = require('gulp');//import gulp
var zip = require('gulp-zip');//import gulp-zip
 

/**
 * Creacion de ZIP de proyecto
 */
gulp.task('EmpaquetarESB', function() {
  return gulp.src('src/*')//carpeta de la cual se extraera el codigo
    .pipe(zip('ESB.zip'))// nombre del zip
    .pipe(gulp.dest('dist'));//ubicacion del zip
});
