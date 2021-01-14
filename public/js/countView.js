// Understands how to display a count.

"use strict";

class CountView {
  constructor(countElement) {
    this._countElement = countElement;
  }

  display(count) {
    this._countElement.innerHTML = count;
  }
}

