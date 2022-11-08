const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // name indicates entry keys
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9001/',
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
      title: 'Hello world',
      filename: 'hi.html',
      meta: {
        description: 'Test description'
      }
    }),
    new ModuleFederationPlugin({
      name: 'HiApp',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorldPage':
          './src/components/hello-world-page/hello-world-page.js'
      }
    })
  ]
};
