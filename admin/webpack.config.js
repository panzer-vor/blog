const path = require('path')
const resolve = (url) => path.resolve(__dirname, url)
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: resolve('./src/index.js'),
  output: {
    path: resolve('./dist')
  },
  resolve: {
    alias: {
      '@assets': resolve('./src/assets')
    },
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: resolve('./index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: resolve('./dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  }
}