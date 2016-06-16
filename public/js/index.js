// Understands how to set up the app.

"use strict";

(function() {
  window.addEventListener("load", function() {
    setupCountController(document,
                         createCountModel(),
                         createCountView(document),
                         createCountPersister($));
  });
})();
