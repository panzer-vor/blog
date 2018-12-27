module.exports = {
  mode: 'development',
  entry: {
      'app': './src/main.ts'
  },
  output: {
      filename: '[name].bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.ts?$/,
              use: {
                  loader: 'ts-loader'
              }
          }
      ]
  },
  devtool: 'source-map',
}