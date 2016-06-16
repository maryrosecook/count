// Understands how to display a count.

"use strict";

(function(exports) {
  function createCountView(document) {
    var countView = extend(createEventSource(), CountView);
    countView._init(document);
    return countView;
  };

  var CountView = {
    _init: function(document) {
      this._countElement = document.getElementById("count");
    },

    display: function(count) {
      this._countElement.innerHTML = count;
    }
  };

  exports.createCountView = createCountView;
})(this);
