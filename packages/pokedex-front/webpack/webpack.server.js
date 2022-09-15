const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  name: "server",
  entry: {
    index: "./src/Server/server.js",
  },
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "../build/serverPokedex"),
    filename: "serverPokedex.bundle.js",
    libraryTarget: "commonjs",
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
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
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              fallback: 'file-loader',
              outputPath: '../client/imgs',
              publicPath: '/imgs',
              name: '[hash].[ext]'
            }
          }
        ]
      },
    ],
  },
  plugins: [],
};

