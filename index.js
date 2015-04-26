
'use strict';

try {
  module.exports = require('jstrace');
} catch (err) {
  module.exports = function () {};
}
