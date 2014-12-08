'use strict';

// PATH CONFIGURATION ==================================
var basePaths = {
    src: 'src/',
    dist: 'dist/',
};
var paths = {

    styles: {
        src: basePaths.src + 'scss/',
        dist: basePaths.dist + 'css/'
    },
    js: {
        src: basePaths.src + 'js/',
        dist: basePaths.dist + 'js/'
    },
    images: {
        src: basePaths.src + 'img/',
        dist: basePaths.dist + 'img/'
    },
    data: {
        src: basePaths.src + 'data/',
        dist: basePaths.dist + 'data/'
    },
};
var files = {
    styles: paths.styles.src + '**/*.scss',
    js: paths.js.src + '**/*.js',
    index: basePaths.src + 'index.html'
};



// INIT GULP ============================================
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');
var reload      = browserSync.reload;


// CLEAN ================================================
gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));


// CSS ==================================================
gulp.task('css', function () {
    return gulp.src(files.styles)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(reload({stream:true}));
});


// scripts ==============================================
gulp.task('scripts', function() {
    gulp.src([
        paths.js.src + 'vendor/angular.min.js',
        paths.js.src + 'app.js',
        paths.js.src + 'controllers.js'
    ])
    .pipe($.concat('scripts.js'))
    .pipe(gulp.dest(paths.js.dist))
});

// ERROR HANDLER ========================================
gulp.task('browser-sync', function() {
    browserSync({
        notify: false,
        server: [basePaths.dist],
        port: 8000,
        index: 'index.html',
        open: 'external'
    });
});

// WEBSERVER=============================================
// gulp.task('webserver', function() {
//     gulp.src('dist')
//         .pipe($.webserver({
//             livereload: true,
//             open: true
//         }));
// });


// WATCH ================================================
gulp.task('watch', function () {
    gulp.watch(files.styles, ['css']);
    gulp.watch(files.js, ['scripts']);
    gulp.watch(files.index, ['copy_index']);
});




// COPY =================================================
gulp.task('copy_index', function() {
    gulp.src(basePaths.src + 'index.html')
        .pipe(gulp.dest(basePaths.dist));
});
gulp.task('copy_data', function() {
    gulp.src(paths.data.src + '**')
        .pipe(gulp.dest(paths.data.dist));
});


// ======================================================
// TASKS
// ======================================================
gulp.task( 'build',
    [
        'css',
        'browser-sync',
        'scripts',
        'copy_index',
        'copy_data',
        'watch'
    ],
    function () {
        // gulp.watch(files.styles, ['css']);
        return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
    }
);

gulp.task('default',
    [
        'clean'
    ],
    function () {
        gulp.start('build');
    }
);
