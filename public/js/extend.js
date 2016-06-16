// Understands how to use the prototype chain to make an object
// inherit some properties.
// (We would normally use a library for this code.)

"use strict";

(function(exports) {
  function extend(objectToExtend, extension) {
    var extendedObject = Object.create(objectToExtend);
    Object.keys(extension).forEach(function(key) {
      extendedObject[key] = extension[key];
    });

    return extendedObject;
  };

  exports.extend = extend;
})(this);
