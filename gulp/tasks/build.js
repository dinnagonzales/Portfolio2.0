var gulp = require('gulp');

gulp.task('build', ['browserify',  'sass', 'markup', 'fonts', 'images']);
