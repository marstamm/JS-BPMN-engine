const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devtool: "inline-source-map",
  mode: "development",
  watch: true,
  plugins: [new CopyPlugin([{ from: "src/index.html", to: "index.html" }])],
};

module.exports = config;
