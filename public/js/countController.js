// Understands how to update a CountView and CountModel when the
// increment button is clicked.

"use strict";

class CountController {
  constructor(incrementButton, countModel, countView, countPersister) {
    this._incrementButton = incrementButton;
    this._countModel = countModel;
    this._countView = countView;
    this._countPersister = countPersister;

    var self = this;
    this._countPersister.get(function(count) {
      self._countModel.set(count);
      self._updateCountView();
    });

    this._setupButtonToIncrementCount();
  }

  _setupButtonToIncrementCount() {
    var self = this;
    this._incrementButton
      .addEventListener("click", function() {
        self._countModel.increment();
        self._countPersister.set(self._countModel.count(), function() {
          self._updateCountView();
        });
      });
  }

  _updateCountView() {
    this._countView.display(this._countModel.count());
  }
}
