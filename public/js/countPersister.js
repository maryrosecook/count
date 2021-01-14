// Understands how to persist the count.

"use strict";

class CountPersister {
  constructor($) {
    this._$ = $;
  }
 
  get(callback) {
    this._$.get("/count", function(response) {
      callback(response.count);
    });
  }

  set(count, callback) {
    this._$.post("/count", { count: count }, callback);
  }
}
