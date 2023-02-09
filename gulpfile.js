const gulp = require("gulp"),
  htmlmin = require("gulp-htmlmin"),
  rename = require("gulp-rename"),
  concat = require("gulp-concat"),
  rigger = require("gulp-rigger"),
  series = require("gulp"),
  mjml = require("gulp-mjml");

const buildMJML = async () => {
  gulp
    .src("app/templates/page.mjml")
    .pipe(rigger())
    .pipe(rename("index.mjml"))
    .pipe(gulp.dest("app/mjml"));
};
const mjmlEngine = require("mjml");
const buildHTML = async () => {
  return gulp
    .src("app/MJML/index.mjml")
    .pipe(mjml(mjmlEngine, { minify: true }))
    .pipe(gulp.dest("app/html"));
};
const run = async (cb) => {
  buildMJML();
  buildHTML();
};

exports.default = run;
