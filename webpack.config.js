const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path(__dirname, 'dist'),
    filename: 'main.js'
  }
}