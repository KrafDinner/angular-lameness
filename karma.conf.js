function KarmaConfig(config) {
  var configuration = {
    frameworks: ['browserify', 'jasmine'],
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      '../node_modules/jquery/dist/jquery.js',
      '../node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'test/**/*.spec.js',
    ],
    preprocessors: {
      'test/**/*.spec.js': ['browserify'],
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,
    browserify: {
      debug: true,
      paths: ['./node_modules', './src'],
      transform: [['babelify', {presets: ['es2015']}], 'partialify'],
      extensions: ['.js', '.html'],
    },
  };

  config.set(configuration);
}

module.exports = KarmaConfig;
