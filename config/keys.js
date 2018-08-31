// keys.js figure out which set of credentuals to use

if (process.env.NODE_ENV === 'production') {
  // return prod set of keys
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}
