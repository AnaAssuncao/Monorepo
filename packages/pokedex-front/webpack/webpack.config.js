const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  name: "client",
  entry: {
    index: "./src/Client/client.js",
  },
  output: {
    path: path.resolve(__dirname, "../build/clientPokedex"),
    filename: "clientPokedex.bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: ["*", ".js", ".jsx"] },
        exclude: [/node_modules/, /.stories.js/, /.test.js/],
        use: [
          {
            loader: "babel-loader?cacheDirectory",
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: '../../infra/dev/.env'
    })
  ]
};
