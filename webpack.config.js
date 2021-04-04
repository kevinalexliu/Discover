const path = require('path');

const SRC = path.join(__dirname, 'client', 'src');
const DIST = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: SRC,
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: DIST
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  }
};