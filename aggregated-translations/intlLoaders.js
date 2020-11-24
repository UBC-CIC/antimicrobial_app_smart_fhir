'use strict';

var loadEnIntl = function loadEnIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en.js');
  }, 'en-intl-local');
};

var intlLoaders = {
  'en': loadEnIntl
};

module.exports = intlLoaders;