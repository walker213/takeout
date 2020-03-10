const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcRoot = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist");
const pageDir = path.resolve(srcRoot, "pages");
const mainFile = "index.jsx";

function getEntry() {
  let entryMap = {};
  fs.readdirSync(pageDir).forEach(pathname => {
    let fullPathName = path.resolve(pageDir, pathname);
    let stat = fs.statSync(fullPathName);
    let fileName = path.resolve(fullPathName, mainFile);
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathname] = fileName;
    }
  });
  return entryMap;
}
function getHtmlArray(entryMap) {
  let htmlArray = [];
  Object.keys(entryMap).forEach(key => {
    let fullPathName = path.resolve(pageDir, key);
    let fileName = path.resolve(fullPathName, key + ".html");
    console.log(key);
    if (fs.existsSync(fileName)) {
      htmlArray.push(
        new HtmlWebpackPlugin({
          fileName: key + ".html",
          template: fileName,
          chunks: [key], // 引入的[key].js？
          title: key
        })
      );
    }
  });
  return htmlArray;
}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
  mode: "development",
  entry: entryMap,
  output: {
    path: distPath,
    filename: "[name].min.js"
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"], include: srcRoot },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: "url-loader?limit=8192",
        include: srcRoot
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        include: srcRoot
      }
    ]
  },
  plugins: [...htmlArray, new CleanWebpackPlugin()],
  resolve: {
    mainFiles: ["index"],
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
};
