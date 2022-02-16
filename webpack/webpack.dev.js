const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // eval-cheap-module-source-map
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
    open: false,
  },
  optimization: {
    moduleIds: 'named',
  },
});