"use strict";

describe("CountView", function() {
  var subject, documentMock, elementMock;

  beforeEach(function() {
    documentMock = { getElementById: null };
    elementMock = {};
    spyOn(documentMock, "getElementById").and.returnValue(elementMock);
    subject = createCountView(documentMock);
  });

  behavesLikeEventSource(function() {
    return createCountView(documentMock);
  });

  describe("createCountView", function() {
    it("should create new countView", function() {
      expect(subject.display).toBeDefined();
    });
  });

  describe("#display", function() {
    it("should set innerHTML of countElement to passed count", function() {
      subject.display(1);
      expect(elementMock.innerHTML).toBe(1);
    });
  });
});
