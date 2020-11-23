const path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'webpack.js'
  }
};