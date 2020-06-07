//Installing gulp plugins
var gulp = require("gulp");
var minifyCSS = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var gp_concat = require("gulp-concat");
var gp_rename = require("gulp-rename");
var gp_uglify = require("gulp-uglify");
var path = require("path");

gulp.task("css-main", function() {
  return (
    gulp
      .src([
        "./public/css/main.css",
        "./public/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
        "./public/css/animate.css"
      ])
      //minify CSS
      .pipe(minifyCSS())
      .pipe(autoprefixer("last 2 version", "safari 5", "ie8", "ie9"))
      //place all CSS in this file
      .pipe(gp_concat("style.min.css"))
      //add it in this folder
      .pipe(gulp.dest("./public/dist/css"))
  );
});

//Copy the fonts directory to the dist directory

gulp.task("copy-fonts", function() {
  return gulp
    .src(["./public/fonts/**"])
    .pipe(gulp.dest("./public/dist/fonts/"));
});

//Vendor tasks
gulp.task("css-vendor", function() {
  return (
    gulp

      .src([
        "./public/vendor/bootstrap/css/bootstrap.min.css",
        "./public/vendor/revolution/css/layers.css",
        "./public/vendor/revolution/css/navigation.css",
        "./public/vendor/revolution/css/settings.css",
        "./public/vendor/css-hamburgers/hamburgers.min.css",
        "./public/vendor/select2/select2.min.css",
        "./public/vendor/daterangepicker-bootstrap/daterangepicker.css",
        "./public/vendor/animsition/dist/css/animsition.min.css"
      ])
      //minify CSS
      .pipe(minifyCSS())
      .pipe(autoprefixer("last 2 version", "safari 5", "ie8", "ie9"))
      //place all CSS in this file
      .pipe(gp_concat("vendor.min.css"))
      //add it in this folder
      .pipe(gulp.dest("./public/dist/vendor/css"))
  );
});

//Adding a task combining all tasks

gulp.task(
  "style",
  gulp.series("css-main", "copy-fonts", "css-vendor", function() {})
);
