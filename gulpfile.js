var gulp = require('gulp'); // gulpを読み込む
var uglify = require('gulp-uglify'); // gulp-uglifyを読み込む
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();

// 「uglify」タスクを定義する
gulp.task('uglify', function () {
  // タスクを実行するファイルを指定
  gulp.src('./src/**/*.js', { base: 'src' })
    // 実行する処理をpipeでつないでいく
    .pipe(uglify()) // uglifyを実行
    .pipe(gulp.dest('htdocs/js')) // 圧縮したファイルをdistに出力
});

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('./src/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
});

// mochaテスト
gulp.task('mocha',['jshint'], function () {
  gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({ require:['intelli-espower-loader'], reporter: 'list'}))
    .on('error', gutil.log);
});
