const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/roman.js',
  output: {
    filename: '[name].[contenthash].js', // name indicates entry keys
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9002/',
    clean: true
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
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
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
      title: 'Roman',
      filename: 'roman.html',
      meta: {
        description: 'Test description roman'
      }
    }),
    new ModuleFederationPlugin({
      name: 'RomanApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RomanPage': './src/components/roman-page/roman-page.js'
      }
    })
  ]
};
