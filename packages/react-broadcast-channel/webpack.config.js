const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: {
      name: "react-broadcast-channel",
      type: "umd"
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve : {
    extensions : [".jsx", ".js" , ".ts" , ".tsx"]
  },  
  externals : {
    "react" : "react",
    "react-dom" : "react-dom"
  }
};
