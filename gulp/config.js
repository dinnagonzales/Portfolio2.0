var dest = './build';
var src  = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**',
      '!' + dest + '/**.map'
    ]
  },
  fonts:{
    src: [ src + '/assets/**/*.{woff,woff2}'],
    dest: dest
  },
  sass: {
    src: src + '/sass/**/*.scss',
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  },
  markup: {
    src: src + '/htdocs/*.html',
    watch: src + '/htdocs/**',
    dest: dest,
    swig_options: {
      defaults: {
        cache: false
      },
      json_path: src + '/data'
    }
  },
  images: {
    src: [ src + '/assets/**/*.{jpg,jpeg,png,gif}'],
    dest: dest + '/assets',
    options: {
      optimizationLevel: 3,
      progessive: true,
      interlaced: true
    }
  },
  browserify: {
    debug: true,
    extensions: ['.jsx'],
    bundleConfigs: [{
      entries: src + '/javascript/app.jsx',
      dest: dest + '/',
      outputName: 'app.js'
    }]
  }
};
