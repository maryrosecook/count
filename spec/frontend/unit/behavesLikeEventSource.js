"use strict";

(function(exports) {
  function behavesLikeEventSource(createSubject) {
    describe("behaves like an event source", function() {
      var subject;

      beforeEach(function() {
        subject = createSubject();
      });

      describe("#addEventListener", function() {
        it("should respond to addEventListener", function() {
          expect(subject.addEventListener instanceof Function).toBe(true);
        });
      });

      describe("#triggerEvent", function() {
        it("should call listener", function() {
          var eventName = "update";
          var eventData = 1;

          var listener = jasmine.createSpy("listener");
          subject.addEventListener(eventName, listener);

          subject.triggerEvent(eventName, eventData);

          expect(listener).toHaveBeenCalledWith(eventData);
        });

        it("should not throw if no listeners", function() {
          var eventName = "update";
          var eventData = 1;

          expect(function() {
            subject.triggerEvent(eventName, eventData);
          }).not.toThrow();
        });
      });
    });
  };

  exports.behavesLikeEventSource = behavesLikeEventSource;
})(this);
