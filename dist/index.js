'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lodash = require('lodash');

var DeepMerge = function () {
  function DeepMerge() {
    _classCallCheck(this, DeepMerge);
  }

  _createClass(DeepMerge, [{
    key: 'merge',

    /**
       * @param a
       * @param b
      * @returns {*}
      */

    value: function merge(a, b) {
      return lodash.mergeWith(a, b, this.deep);
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'deep',
    value: function deep(a, b) {
      if (lodash.isArray(a) && lodash.isArray(b)) {
        return a.concat(b);
      }
      return {};
    }
  }]);

  return DeepMerge;
}();

module.exports = DeepMerge;