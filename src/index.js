const lodash = require('lodash');

class DeepMerge {
  /**
     * @param a
     * @param b
    * @returns {*}
    */

  merge(a, b) {
    return lodash.mergeWith(a, b, this.deep);
  }

  // eslint-disable-next-line class-methods-use-this
  deep(a, b) {
    if (lodash.isArray(a) && lodash.isArray(b)) {
      return a.concat(b);
    }
    return {};
  }
}

module.exports = DeepMerge;
