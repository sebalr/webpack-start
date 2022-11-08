const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/dashboard.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9000/',
    clean: true
  },
  mode: 'development',
  devServer: {
    port: 9000,
    historyApiFallback: {
      index: 'dashboard.html'
    },
    devMiddleware: {
      index: 'dashboard.html',
      writeToDisk: true
    }
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      title: 'Dashboard'
    }),
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        HelloWorldApp: 'HiApp@http://localhost:9001/remoteEntry.js',
        RomanApp: 'RomanApp@http://localhost:9002/remoteEntry.js'
      }
    })
  ]
};
