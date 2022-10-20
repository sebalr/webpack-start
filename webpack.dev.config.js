const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    clean: true
  },
  mode: 'development',
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
      meta: {
        description: 'Test description'
      }
    })
  ]
};
