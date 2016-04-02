var glob = require('glob');

module.exports = {
  entry: glob.sync('./src/tests/**/*.spec.js'),
  output: {
    path: './build/tests',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
