// var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR, 
    filename: 'js/bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        // include: APP_DIR,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: APP_DIR,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manefest']
    // })
  ]
}

module.exports = config;