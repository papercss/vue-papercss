const path = require('path');
const webpack = require("webpack");

const modulesDir = path.join(__dirname, '..', 'node_modules');

module.exports = {
  entry: path.join(__dirname, '../demo/index.js'),

  output: {
    path: path.join(__dirname, '../demo'),
    filename: 'papercss.bundle.js',
  },

  devServer: {
    inline: true,
    port: 8000,
    contentBase: path.join(__dirname, '../demo'),
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'papercss-vue': path.join(__dirname, '..', 'src'),
      'vue$': path.join(modulesDir, 'vue/dist/vue.common.js'),
    },
  },

  resolveLoader: {
    modules: [modulesDir],
  },

  module: {
    loaders: [
			{ test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.png$/, loader: 'file-loader' },
    ],
  },
}
