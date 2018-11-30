const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'Angstrom.js',
    path: path.resolve(__dirname, 'dist')
  }
};

