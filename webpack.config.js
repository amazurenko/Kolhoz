const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

 let conf = {
  entry: 
  {
    index: './src/index.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: 
  {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    open: false,
    overlay: true,
    host: '0.0.0.0',
    port: 3001
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: '/node-modules/'
          },
          {
            test: /\.s?css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: '/'
                }
              }
            ]
          }
      ]
  },
  plugins: [
    new CleanWebpackPlugin('dist',{}),
    new MiniCssExtractPlugin({
        filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
        inject: false,
        hash: false,
        template: "./src/index.html",
        filename: "index.html"

    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : "eval-sourcemap";
    return conf;
}
