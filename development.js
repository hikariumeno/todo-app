import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

export default {
  mode: "development",
  entry: src + "/index.jsx",

  output: {
    path: dist,
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + "/index.html",
      filename: "index.html",
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: "0.0.0.0",
    port: 8080,
  },
};
