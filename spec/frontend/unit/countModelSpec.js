"use strict";

describe("CountModel", function() {
  var subject;

  beforeEach(function() {
    subject = createCountModel();
  });

  behavesLikeEventSource(createCountModel);

  describe("createCountModel", function() {
    it("should create new countModel instance", function() {
      expect(subject.count).toBeDefined();
    });

    it("should initialise count to 0", function() {
      expect(subject.count()).toBe(0);
    });
  });

  describe("#count", function() {
    it("should return current count", function() {
      expect(subject.count()).toBe(0);
    });
  });

  describe("#set", function() {
    it("should set count to 5", function() {
      expect(subject.count()).toBe(0);
      subject.set(5);
      expect(subject.count()).toBe(5);
    });
  });

  describe("#increment", function() {
    it("should increase current count by 1", function() {
      expect(subject.count()).toBe(0);
      subject.increment();
      expect(subject.count()).toBe(1);
    });
  });
});
