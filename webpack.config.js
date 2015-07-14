var path = require('path');
var buildPath = path.resolve(__dirname, 'build');

module.exports = {
 entry: ['./js/main.js'],
 output: {
    path: buildPath,
    filename: 'bundle.js'
  }
};
