const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin")
const path = require("path")
const glob = require("glob")

module.exports = (...args) => {
  console.log(args[1])
  return {
    entry: "./src/index",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js"
    },
    devServer: {
      port: 8080,
      static: {
        directory: path.resolve(__dirname)
      },
      hot: true,
      client: {
        overlay: true
      },
      liveReload: false
    },
    optimization: {},
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx|jsx)/,
          use: "babel-loader"
        },
        {
          test: /\.css/,
          use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }, "postcss-loader"]
        },
        {
          test: /\.(jpg|jpeg|png)/,
          type: "asset",
          parser: {
            dataUrlCondition: { maxSize: 10 * 1024 }
          },
          generator: {
            filename: "images/[name].[contenthash:12][ext]"
          },
          use: {
            loader: "image-webpack-loader", options: {
              mozjpeg: { quality: 40 },
              pngquant: { quality: [0.65, 0.90], speed: 4 }
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new MiniCssExtractPlugin(),
      new PurgeCSSPlugin({
        paths: glob.sync(`${path.join(__dirname, "./src")}/**/*`, { nodir: true })
      })
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"]
    }
  }
}