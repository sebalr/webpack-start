const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/roman.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9002/',
    clean: true
  },
  mode: 'development',
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    devMiddleware: {
      index: 'roman.html',
      writeToDisk: true
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // are executed rith to left
        // compile sass, read css imports in js files, load styles to dom
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello world two',
      filename: 'roman.html',
      meta: {
        description: 'Test description'
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
