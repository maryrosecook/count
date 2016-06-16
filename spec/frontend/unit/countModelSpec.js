"use strict";

describe("CountModel", function() {
  var countModel;

  beforeEach(function() {
    countModel = new CountModel();
  });

  describe("::new", function() {
    it("should create new countModel instance", function() {
      expect(countModel instanceof CountModel).toBe(true);
    });

    it("should initialise count to 0", function() {
      expect(countModel.count()).toBe(0);
    });
  });

  describe("#count", function() {
    it("should return current count", function() {
      expect(countModel.count()).toBe(0);
    });
  });

  describe("#set", function() {
    it("should set current count", function() {
      expect(countModel.count()).toBe(0);
      countModel.set(5);
      expect(countModel.count()).toBe(5);
    });
  });

  describe("#increment", function() {
    it("should increase current count by 1", function() {
      expect(countModel.count()).toBe(0);
      countModel.increment();
      expect(countModel.count()).toBe(1);
    });
  });
});
