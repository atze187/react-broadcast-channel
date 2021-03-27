const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry : "./src/index.tsx",
  output : {
    filename : "[name].js",
    path : path.resolve(__dirname,"dist"),
  },
  resolve : {
    extensions : [ ".tsx", ".ts",".js" , ".jsx" ]
  },
  module : {
    rules : [
      {
        test : /\.(tsx?)$/,
        exclude : "/node_modules/",
        use :  {
          loader : "babel-loader"
        }
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname,"public","index.html"),
      title : "React broadcast channel"
    })
  ]
}