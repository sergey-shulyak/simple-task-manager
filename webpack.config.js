const { DefinePlugin, NamedModulesPlugin } = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');

require('babel-polyfill');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');
const ENV = process.env.NODE_ENV;

const isProduction = () => ENV === 'production';

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
        test: /\.(s?)css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname, '.env'),
      secure: true
    })
  ],
  devServer: {
    contentBase: BUILD_DIR,
    historyApiFallback: true,
    quiet: true
  },
  devtool: 'inline-source-map'
};

if (isProduction()) {
  config.module.rules.push({
    test: /\.js$/,
    include: SRC_DIR,
    loader: 'eslint-loader',
    options: { failOnError: true }
  });

  config.plugins.push(
    new ExtractTextPlugin('styles.css'),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({ parallel: true }),
    new OptimizeCssAssets()
  );
} else {
  config.plugins.push(
    new NamedModulesPlugin(),
    new ExtractTextPlugin({ disable: true }),
    new FriendlyErrorsPlugin()
  );
}

module.exports = config;
