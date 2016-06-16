"use strict";

(function() {
  window.addEventListener("load", function() {
    var incrementButton = document.getElementById("increment");
    var countDiv = document.getElementById("count");

    new CountController(incrementButton,
                        new CountModel(),
                        new CountView(countDiv),
                        new CountPersister($));
  });
})();
