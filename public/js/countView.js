// Understands how to display a count.

"use strict";

(function(exports) {
  function CountView(countElement) {
    this._countElement = countElement;
  };

  CountView.prototype = {
    display: function(count) {
      this._countElement.innerHTML = count;
    }
  };

  exports.CountView = CountView;
})(this);
