/* eslint-env node */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const cssnano = require("cssnano");
const glob = require("glob");
const npmPackage = require("./package.json");
const path = require("path");
const postcssPresetEnv = require("postcss-preset-env");
const webpack = require("webpack");

const WORDPRESS_BANNER = `Theme Name: Diversify
Text Domain: diversifywebsite
Version: ${npmPackage.version}`;

module.exports = {
  entry: [
    "./diversifywebsite/assets/scripts/main.js",
    "./diversifywebsite/assets/styles/style.scss",
    ...glob.sync("./diversifywebsite/assets/icons/source/*.svg"),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 2, url: false } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                cssnano(),
                postcssPresetEnv({ autoprefixer: { grid: true }, stage: 1 }),
              ],
            },
          },
          "sass-loader",
        ],
      },
      { exclude: /node_modules/, loader: "babel-loader", test: /\.js$/ },
      {
        include: path.resolve(__dirname, "diversifywebsite/assets/icons/"),
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          outputPath: "assets/icons/",
          spriteFilename: "sprite.svg",
        },
        test: /\.svg$/,
      },
    ],
  },
  output: {
    filename: "assets/scripts/[name].bundle.js",
    path: path.resolve(__dirname, "diversifywebsite/"),
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: WORDPRESS_BANNER,
      test: /\.(css|scss)$/,
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new SpriteLoaderPlugin({ plainSprite: true }),
  ],
};
