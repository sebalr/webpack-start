const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/dashboard.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9000/',
    clean: true
  },
  mode: 'production',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    devMiddleware: {
      index: 'dashboard.html',
      writeToDisk: true
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      filename: 'dashboard.html',
      meta: {
        description: 'Test description'
      }
    }),
    new ModuleFederationPlugin({
      name: 'Dashboard',
      name: 'App',
      remotes: {
        HelloWorldApp: 'HiApp@http://localhost:9001/remoteEntry.js',
        RomanApp: 'RomanApp@http://localhost:9002/remoteEntry.js'
      }
    })
  ]
};
