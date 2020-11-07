const PATH = require("path");

const MODE = "development";
// const MODE = "production";

const app = {
  mode: MODE,
  devtool: "source-map",
  performance: {
    //ファイルサイズ警告を出さない
    hints: false,
  },
  watchOptions: {
    ignored: "/node_modules/",
  },
  entry: {
    main: PATH.resolve(__dirname, "src/js/main.js"),
  },
  output: {
    // 出力ファイルのディレクトリ名
    path: PATH.resolve(__dirname, "dist"),
    // 出力ファイル名 entryのキーがファイル名になる
    filename: "assets/js/[name].js",
  },
  module: {
    rules: [
      //js
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
};

module.exports = app;
