'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var NODE_ENV = process.env.NODE_ENV || 'dev'
var release = NODE_ENV === 'prod'

var plugins = [
  new HtmlWebpackPlugin({
    title: 'hello world',
    template: path.resolve(__dirname, 'src/index.html')
  }),
]

if (release) {
  plugins.push(new webpack.optimize.DedupePlugin())
  plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
  debug: !release,
  cache: !release,
  devtool: !release && 'inline-source-map',
  entry: {
    bundle: [
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      utils: path.join(__dirname, '/src/utils'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '/build'),
    historyApiFallback: {
      index: '/index.html'
    }
  }
}
