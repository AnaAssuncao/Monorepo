const path = require("path");

module.exports = {
  name: "client",
  entry: {
    index: "./src/Client/client.js",
  },
  output: {
    path: path.resolve(__dirname, "../build/client"),
    filename: "client.bundle.js",
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
  // optimization: {
  //   removeAvailableModules: false,
  //   removeEmptyChunks: false,
  //   mergeDuplicateChunks: false,
  //   splitChunks: {
  //     cacheGroups: {
  //       sympla_ui: {
  //         test: /\/monorepo-ui\/lib\/.*/,
  //         name: 'monorepo-ui',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  // plugins: [
  // ]
};
