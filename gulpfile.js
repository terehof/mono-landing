"use strict";

var gulp = require("gulp");
var rename = require("gulp-rename");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var del = require("del");
var uglify = require("gulp-uglify");
var server = require("browser-sync").create();
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        ">1%"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("build/css"))
    // .pipe(minify())
    // .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("symbols", function() {
  return gulp.src("build/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "css/**",
    "img/**",
    "js/**",
    "*.html"
    ], {
      base: "."
    })
    .pipe(gulp.dest("build"));
});

gulp.task("copyHtml", function() {
  return gulp.src ([
    "*.html"
  ])
  .pipe(gulp.dest("build"));
});

gulp.task("scripts", function() {
  return gulp.src("js/*.js")
    // .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});


gulp.task ("clean", function() {
  return del("build");
});

gulp.task("serve", function() {
  server.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html",["copyHtml"]);
  gulp.watch("build/*.html").on("change", server.reload);
  gulp.watch("js/**/*.js", ["scripts"]);
  gulp.watch("build/js/**/*.js").on("change", server.reload);
});

gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "style",
    "images",
    "symbols",
    fn
  );
});