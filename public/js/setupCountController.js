// Understands how to update a CountModel and CountView when the
// increment button is clicked.

"use strict";

(function(exports) {
  function setupCountController(document, countModel, countView, countPersister) {
    setInitialCount(countModel, countPersister);
    setupViewToRenderChangesToCount(countModel, countView);
    setupPersisterToPersistChangesToCount(countModel, countPersister);
    setupButtonToIncrementCount(document, countModel);
  };

  function setInitialCount(countModel, countPersister) {
    countPersister.get(countModel.set.bind(countModel));
  };

  function setupViewToRenderChangesToCount(countModel, countView) {
    countModel.addEventListener("change", countView.display.bind(countView));
  };

  function setupPersisterToPersistChangesToCount(countModel, countPersister) {
    countModel.addEventListener("change", countPersister.set.bind(countPersister));
  };

  function setupButtonToIncrementCount(document, countModel) {
    document
      .getElementById("increment")
      .addEventListener("click", countModel.increment.bind(countModel));
  };

  exports.setupCountController = setupCountController;
})(this);
