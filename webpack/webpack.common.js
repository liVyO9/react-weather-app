const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry:  path.resolve(__dirname, '../src/index.ts'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '../dist'),
      clean: true,
    },
    module: {
      rules: [
        //TypeScript
        {
          test: /\.ts(x?)$/,
          use: [
            {
              loader: 'thead-loader',
              options: {
                workers: 8,
                poolTimeout: 5000,
              }
            },
            {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              },
            },
          ],
          include: path.resolve(__dirname, 'src'),
        },
        // CSS
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: path.resolve(__dirname, 'src'),
        },
        //Images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
          include: path.resolve(__dirname, 'src'),
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
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
};