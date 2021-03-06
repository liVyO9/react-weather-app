const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const os = require('os');

console.log(__dirname)
module.exports = {
    entry:  path.resolve('src/index.tsx'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve('../dist'),
      clean: true,
    },
    module: {
      rules: [
        //TypeScript
        {
          test: /\.ts(x?)$/,
          use: [
            {
              loader: 'thread-loader',
              options: {
                workers: os.cpus().length / 2,
                poolTimeout: 5000,
              }
            },
            {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
              },
            },
          ],
          include: path.resolve('src'),
        },
        // CSS
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: path.resolve('src'),
        },
        //Images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
          include: path.resolve('src'),
        },
        //rest
        {
          use: 'file-loader',
          exclude: [/\.(svg|png|bmp|gif|jpg|jpeg|css|scss|sass|js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      symlinks: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Production',
        template: path.resolve('src/index.html'),
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          }
        }
      }),
    ],
};