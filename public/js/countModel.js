// Understands how to keep count.

"use strict";

(function(exports) {
  function CountModel() {
    this._count = 0;
  };

  CountModel.prototype = {
    count: function() {
      return this._count;
    },

    set: function(count) {
      this._count = count;
    },

    increment: function() {
      this._count++;
    }
  };

  exports.CountModel = CountModel;
})(this);
