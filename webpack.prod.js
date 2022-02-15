const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   output: {
    pathinfo: false,
   },
   // to uzywac czy nie? performance vs build time
   optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: true,
  },
 });