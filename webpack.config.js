const path = require('path');
var webpack = require("webpack");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js']
  },
  target: 'node',

};
