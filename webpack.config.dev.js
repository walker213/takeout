const path = require("path");
const fs = require("fs");
const HtmlWebpack = require("html-webpack-plugin");
const srcRoot = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist");
const pageDir = path.resolve(srcRoot, "pages");
const mainFile = "index.js";

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

const entryMap = getEntry();
console.log(entryMap);

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
      }
    ]
  }
};
