const path = require("path");
module.exports = {
  entry: {
    popup: path.join(__dirname, "src/popup/index.tsx"),
    manager: path.join(__dirname, "src/manager/index.tsx"),
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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'css/images/[name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: false,
            },
          },
        ],
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
