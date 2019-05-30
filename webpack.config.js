const path = require('path')
const WebpackMd5Hash = require('webpack-md5-hash')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new WebpackMd5Hash(),
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, './public'),
    watchContentBase: true,
    compress: true,
    port: 9002,
    // host: '192.168.1.32',
  },
}
