"use strict";

describe("CountView", function() {
  var countView, countDivMock;

  beforeEach(function() {
    countDivMock = {};
    countView = new CountView(countDivMock);
  });

  describe("::new", function() {
    it("should create new CountView instance", function() {
      expect(countView instanceof CountView).toBe(true);
    });
  });

  describe("#display", function() {
    it("should set innerHTML of countElement to passed count", function() {
      countView.display(1);
      expect(countDivMock.innerHTML).toBe(1);
    });
  });
});
