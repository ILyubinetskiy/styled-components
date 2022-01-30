const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3002,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: "http://localhost:3002/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'styled_components',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react
        },
        ["react-dom"]: {
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
