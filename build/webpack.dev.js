const webpack = require('webpack')
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.common');

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  target: 'web'
})

module.exports = devWebpackConfig;
