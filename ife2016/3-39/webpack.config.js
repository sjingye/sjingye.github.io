let webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: __dirname+"/dist/js",
    filename: "[name].js"
  },
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
      }]
  },
  watch: true
};
