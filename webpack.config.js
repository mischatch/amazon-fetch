const path = require('path');
const webpack = require("webpack");
const WebpackVertxPlugin = require('webpack-vertx-plugin');

let plugins = [];

// plugins.push(new WebpackVertxPlugin());



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {test: /\.scss$/, loader: 'style!css!scss?'},
      {test: /\.html$/, loader: 'html-loader'}
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '*']
  },
  target:
    'node',
  node: {
    net: "empty",
    tls: "empty",
    fs: "empty"
  },
  plugins: plugins,

};
