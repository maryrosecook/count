// Understands how to persist the count.

"use strict";

(function(exports) {
  function CountPersister($) {
    this._$ = $;
  };

  CountPersister.prototype = {
    get: function(callback) {
      this._$.get("/count", function(response) {
        callback(response.count);
      });
    },

    set: function(count, callback) {
      this._$.post("/count", { count: count }, callback);
    }
  };

  exports.CountPersister = CountPersister;
})(this);
