const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry:  path.resolve(__dirname, '../src/index.ts'),
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Production',
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    module: {
      rules: [
        //TypeScript
        {
          test: /\.ts(x)?$/,
          use: [
            {
            loader: 'ts-loader',
            // options: {
            //   transpileOnly: true,
            //   },
            },
          ],
          include: path.resolve(__dirname, 'src'),
        },
        //CSS
        // {
        //   test: /\.css$/,
        //   use: ['style-loader', 'css-loader'],
        //   include: path.resolve(__dirname, 'src'),
        // },
        //SVG
        // {
        //   rest: /\.svg$/,
        //   use: [
        //     {
        //       loader: 'svg-url-loader', 
        //       options: 10000,
        //     },
        //   ],
        // },
        //Images
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/,
        //   type: 'asset/resource',
        //   include: path.resolve(__dirname, 'src'),
        // },
        //rest
        // {
        //   test: /.*/,
        //   use: 'file-loader',
        //   include: path.resolve(__dirname, 'src'),
        // },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      symlinks: false,
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      //po co czyscic skryptem jezeli mozna tutaj?
      clean: true,
    },
};