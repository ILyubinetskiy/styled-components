const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "styled_components",
      filename: "remoteEntry.js",
      remotes: {
        webpack_module_federation: "webpack_module_federation@http://localhost:4200/remoteEntry.js",
      },
      exposes: {
        './App': './src/App',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
      // filename: "remoteEntry.js",
      // remotes: {
      //   store: "store@http://localhost:4200/remoteEntry.js",
      // },
      // exposes: {
      //   './App': './src/App',
      // },
      // shared: {
      //   ...deps,
      //   react: {
      //     singleton: true,
      //     requiredVersion: deps.react,
      //   },
      //   "react-dom": {
      //     singleton: true,
      //     requiredVersion: deps["react-dom"],
      //   },
      // },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};