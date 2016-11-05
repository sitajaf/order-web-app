
require('./vendor.js')();
var appModule = require('../../app');

angular.element(document).ready( function () {
  'use strict';
  angular.bootstrap(document, [appModule.name]);
});
