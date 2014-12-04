'use strict';

// PATH CONFIGURATION ==================================
var basePaths = {
    src: 'src/',
    dest: 'dist/',
};
var paths = {
    styles: {
        src: basePaths.src + 'scss/',
        dest: basePaths.dest + 'css/'
    },
    images: {
        src: basePaths.src + 'img/',
        dest: basePaths.dest + 'img/'
    }
};
var files = {
    styles: paths.styles.src + '**/*.scss',
};



// INIT GULP ============================================
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();


// ERROR HANDLEE ========================================
var exitOnError = false;



function handleError(err) {
  var displayErr = gutil.colors.red(err);
  gutil.log(displayErr);
  if (exitOnError) process.exit(1);
}

// WATCH ================================================
gulp.task('watch', function () {
    gulp.watch(files.styles, ['sass']);
});


// CSS ==================================================
gulp.task('sass', function () {
    gulp.src(files.styles)
        .pipe(plugins.sass()).on('error', handleError)
        .pipe(gulp.dest(paths.styles.dest));
});


gulp.task('default', function() {

});
