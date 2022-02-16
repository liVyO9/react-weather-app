const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
  mode: 'production',
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: true,
  },
  output: {
    pathinfo: false,
  }
 });