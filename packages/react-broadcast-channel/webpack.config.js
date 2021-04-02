const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: {
      name: "react-broadcast-channel",
      type: "umd",
      umdNamedDefine: true
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve : {
    extensions : [".jsx", ".js" , ".ts" , ".tsx"]
  }
};
