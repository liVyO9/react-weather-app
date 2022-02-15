const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = (env) => {
    console.log(env.goal);
    console.log(env.production);

  return {
    entry: {
      index:'./src/index.ts',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Production',
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      //po co czyscic skryptem jezeli mozna tutaj?
      clean: true,
    },
    module: {
      rules: [
        //TypeScript
        {
          test: /\.tsx?$/,
          use: [
            'thread-loader',
            {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              },
            },
          ],
          include: path.resolve(__dirname, 'src'),
        },
        //CSS
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: path.resolve(__dirname, 'src'),
        },
        //SVG
        {
          rest: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader', 
              options: 10000,
            },
          ],
        },
        //Images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          type: 'asset/resource',
          include: path.resolve(__dirname, 'src'),
        },
        //rest
        {
          test: /.*/,
          use: 'file-loader',
          include: path.resolve(__dirname, 'src'),
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      symlinks: false,
    },
  };
};