const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/image-caption.js',
  output: {
    filename: '[name].[contenthash].js', // name indicates entry keys
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9003/',
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
      title: 'Image caption',
      filename: 'image-caption.html',
      meta: {
        description: 'Test description'
      }
    }),
    new ModuleFederationPlugin({
      name: 'ImageCaption',
      filename: 'remoteEntry.js',
      exposes: {
        './ImageCaption': './src/components/image-caption/image-caption.js'
      }
    })
  ]
};
