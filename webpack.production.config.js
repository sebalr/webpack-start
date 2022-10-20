const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jfif)$/,
        type: 'asset/resource' // big files are moved to resource and loaded by url
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        // are executed rith to left
        // compile sass, read css imports in js files, load styles to dom
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new HtmlWebpackPlugin({
      title: 'Hello world',
      filename: 'index.html',
      meta: {
        description: 'Test description'
      }
    })
  ]
};
