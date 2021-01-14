// Understands how to keep count.

"use strict";

class CountModel {
  constructor() {
    this._count = 0;
  }

  count() {
    return this._count;
  }

  set(count) {
    this._count = count;
  }

  increment() {
    this._count++;
  }
}
