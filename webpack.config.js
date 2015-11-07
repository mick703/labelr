/**
 * Created by mingyan on 7/11/15.
 */
var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  hot: true
});