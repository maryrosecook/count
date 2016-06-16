// Understands how to keep count.

"use strict";

(function(exports) {
  function createCountModel() {
    var countModel = extend(createEventSource(), CountModel);
    countModel._init();
    return countModel;
  };

  var CountModel = {
    _init: function() {
      this._count = 0;
    },

    count: function() {
      return this._count;
    },

    set: function(count) {
      this._count = parseInt(count);
      this.triggerEvent("change", this._count);
    },

    increment: function() {
      this.set(this.count() + 1);
    }
  };

  exports.createCountModel = createCountModel;
})(this);
