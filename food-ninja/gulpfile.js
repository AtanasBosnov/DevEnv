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
      .pipe(gulp.dest("./public/dist/css"))
  );
});

//JS tasks

gulp.task("js-main", function() {
  return gulp
    .src(["./public/js/main.js"])
    .pipe(gp_concat("main.min.js"))
    .pipe(gulp.dest("./public/dist/js/"))
    .pipe(gp_rename("main.min.js"))
    .pipe(gp_uglify())
    .pipe(gulp.dest("./public/dist/js/"));
});

gulp.task("js-vendor", function() {
  return gulp
    .src([
      "./public/vendor/jquery/jquery-3.2.1.min.js",
      "./public/vendor/wow/wow.min.js",
      "./public/vendor/animsition/dist/js/animsition.min.js",
      "./public/vendor/bootstrap/js/popper.min.js",
      "./public/vendor/bootstrap/js/bootstrap.min.js",
      "./public/vendor/revolution/js/jquery.themepunch.tools.min.js",
      "./public/vendor/revolution/js/jquery.themepunch.revolution.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.video.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.carousel.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.slideanims.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.actions.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.layeranimation.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.kenburn.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.navigation.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.migration.min.js",
      "./public/vendor/revolution/js/extensions/revolution.extension.parallax.min.js",
      "./public/js/slide-custom.js",
      "./public/vendor/select2/select2.min.js",
      "./public/vendor/daterangepicker-bootstrap/moment.min.js",
      "./public/vendor/daterangepicker-bootstrap/daterangepicker.js"
    ])
    .pipe(gp_concat("vendor.min.js"))
    .pipe(gulp.dest("./public/dist/js/"))
    .pipe(gp_rename("vendor.min.js"))
    .pipe(gp_uglify())
    .pipe(gulp.dest("./public/dist/js/"));
});

//Combined gulp task for JS
gulp.task("js", gulp.series("js-main", "js-vendor", function() {}));

//Combined gulp task for CSS
gulp.task(
  "style",
  gulp.series("css-main", "copy-fonts", "css-vendor", function() {})
);

//Production task
gulp.task("prod", gulp.series("style", "js", function() {}));

//Default task - all the tasks combined
gulp.task("default", gulp.series("style", "js", function() {}));
