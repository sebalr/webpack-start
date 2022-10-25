const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // key will be bundle name
    hi: './src/index.js',
    roman: './src/roman.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    clean: true
  },
  mode: 'development',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    devMiddleware: {
      index: 'index.html',
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
      title: 'Hello world',
      filename: 'index.html',
      chunks: ['hi'],
      meta: {
        description: 'Test description'
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Hello world two',
      filename: 'roman.html',
      chunks: ['roman'],
      meta: {
        description: 'Test description'
      }
    })
  ]
};
