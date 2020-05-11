const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  entry: {
    index: './src/index/index.js',
    page1: './src/page1/page1.js',
    page2: './src/page2/page2.js',
    page3_1: './src/page3/page3-1.js',
    page3_2: './src/page3/page3-2.js',
    page3_3: './src/page3/page3-2.js',
},
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'public/dist'), 
        publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};