const path = require('path');

module.exports = {
  mode: "development",
  watch: false,
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    headers:          { 'Access-Control-Allow-Origin': '*' },
    https:            false,
    disableHostCheck: true,
    port: 3001,
    contentBase: './dist',
    watchContentBase: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};