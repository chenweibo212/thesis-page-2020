const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index/index.js',
      print: './src/index/print.js',
      page1: './src/page1/page1.js',
      page2: './src/page2/page2.js',
      page3: './src/page3/page3.js',
  },
  devtool: 'inline-source-map',
  devServer: {
         contentBase: './dist',
  },
  plugins: [
         new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
         new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/template/index.html',
          inject: true,
          chunks: ['index', 'print']
         }),
         new HtmlWebpackPlugin({
          filename: 'page1.html',
          inject: true,
          chunks: ['page1']
         }),
       ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'), 
    publicPath: '/',
  },
  module: {
    rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
            ],
           },
         ],
     },
};