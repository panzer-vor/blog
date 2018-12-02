const path = require('path')
const resolve = (url) => path.resolve(__dirname, url)
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('./config/config')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: resolve('./src/index.js'),
  output: {
    path: resolve('./dist')
  },
  resolve: {
    alias: {
      '@assets': resolve('./src/assets'),
      "@view": resolve('./src/view'),
      "@config": resolve('./src/config.js'),
      "@http": resolve('./src/tools/http.js'),
      "@store": resolve('./src/store'),
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config,
      }
    })
  ],
  devServer: {
    contentBase: resolve('./dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  }
}