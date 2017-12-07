const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'papercss.js',
    library: 'papercss-vue',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': path.resolve(__dirname, '../node_modules'),
    },
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader', include: __dirname, exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: { warnings: false },
    }),
  ],
}
