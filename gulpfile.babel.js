import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';
import pug from 'gulp-pug';
//import plumber from 'gulp-plumber'


import del from 'del';


// paths
const paths = {
  styles: {
    src: 'source/assets/styles/**/*.sass',
    dest: 'dist/assets/styles/'
  },
  scripts: {
    src: 'source/assets/scripts/**/*.js',
    dest: 'dist/assets/scripts/'
  },
  images: {
    src: 'source/assets/images/**/*.{jpg,jpeg,png}',
    dest: 'dist/assets/img/'
  },
  views: {
    src: 'source/template/*.pug',
    dest: 'dist'
  }
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del(['dist']);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp.src(paths.scripts.src, {
      sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function views() {
  return gulp.src(paths.views.src)
    //.pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.views.dest))
  /*.pipe(reload({
    stream: true
  }));*/
}


function images() {
  return gulp.src(paths.images.src, {
      since: gulp.lastRun(images)
    })
    .pipe(imagemin({
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(paths.images.dest));
}
/*
 * You could even use `export as` to rename exported tasks
 */
function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.views.src, views);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.images.src, images);
}
export {
  watchFiles as watch
};

const build = gulp.series(clean, views, gulp.parallel(styles, scripts), images);
/*
 * Export a default task
 */
export default build;