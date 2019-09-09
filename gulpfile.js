var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
//to minify and add autoprefixer sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minCss = require('gulp-minify-css');
//to concat and minify js
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


//SASS Task
var sassInput = "./src/sass/**/*.scss";
var sassOutput = "./portfolio/build/css";
var sassOptions = {
  errToConole: true,
  outputStyle: 'expanded'
}
var autoprefixerOptions = {
  browsers:['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('buildSass', function () {
  return gulp
    .src(sassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions)).on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(minCss())
    .pipe(gulp.dest(sassOutput));
});

//JS task
var jsInput = "./src/js/**/*.js";
var jsOutput = "./portfolio/build/js";

gulp.task('buildJs', function () {
  return gulp
    .src(jsInput)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest(jsOutput));
});

gulp.task('watch', function () {
  gulp.watch(sassInput, ['buildSass'])
    .on('change', function (event) {
      console.log('File:' + event.path + ' was ' + event.type + ' running task...');
    });
  gulp.watch(jsInput, ['buildJs'])
    .on('change', function (event) {
      console.log('File:' + event.path + ' was ' + event.type + ' running task...');
    });
});

gulp.task('default', ['watch', 'buildSass', 'buildJs']);