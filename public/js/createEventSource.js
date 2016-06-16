// Understands how to tell listeners about events.
// (We would normally use a library for this code.)

"use strict";

(function(exports) {
  function createEventSource() {
    var eventSource = Object.create(EventSource);
    eventSource._init();
    return eventSource;
  };

  var EventSource = {
    _init: function() {
      this._eventCallbacks = {};
    },

    addEventListener: function(eventName, eventCallback) {
      this._eventCallbacks[eventName] = this._eventCallbacks[eventName] || [];
      this._eventCallbacks[eventName].push(eventCallback);
    },

    triggerEvent: function(eventName, data) {
      if (this._eventCallbacks[eventName] !== undefined) {
        this._eventCallbacks[eventName].forEach(function(eventCallback) {
          eventCallback(data);
        });
      }
    }
  };

  exports.createEventSource = createEventSource;
})(this);
