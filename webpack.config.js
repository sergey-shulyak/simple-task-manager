const path = require('path');
require('babel-polyfill');

const BUILD_DIR = path.resolve(__dirname, 'public/build');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.js`],
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, include: SRC_DIR, use: 'babel-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: { failOnError: false }
      },
      {
        test: /\.(s?)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'public')],
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
};

module.exports = config;
