const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    popup: path.join(__dirname, "src/popup/index.tsx"),
    eventPage: path.join(__dirname, "src/event/eventPage.ts"),
    webWorker: path.join(__dirname, "src/utils/web-worker.ts"),
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings
            options: {},
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS
            options: {
              esModule: true,
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]",
              importLoaders: 2,
              camelCase: true,
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader", // Compiles Sass to CSS
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
