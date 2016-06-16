// Understands how to persist the count.

"use strict";

(function(exports) {
  function createCountPersister($) {
    var countPersister = Object.create(CountPersister);
    countPersister._init($);
    return countPersister;
  };

  var CountPersister = {
    _init: function($) {
      this._$ = $;
    },

    get: function(callback) {
      this._$.get("/count", function(response) {
        callback(response.count);
      });
    },

    set: function(count) {
      this._$.post("/count", { count: count });
    }
  };

  exports.createCountPersister = createCountPersister;
})(this);
