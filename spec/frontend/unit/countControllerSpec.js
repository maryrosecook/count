"use strict";

describe("CountController", function() {
  var countController,
      incrementButtonMock,
      countModelMock,
      countViewMock,
      countPersisterMock,
      clickHandler;

  beforeEach(function() {
    incrementButtonMock = { addEventListener: null };
    spyOn(incrementButtonMock, "addEventListener")
      .and
      .callFake(function(_, inClickHandler) {
        clickHandler = inClickHandler;
      });

    countModelMock = jasmine.createSpyObj("countModel", ["count", "set", "increment"]);
    countModelMock.count.and.returnValue(0);

    countViewMock = jasmine.createSpyObj("countView", ["display"])

    countPersisterMock = jasmine.createSpyObj("countPersister", ["get", "set"]);
    countPersisterMock.get.and.callFake(function(callback) {
      callback();
    });

    countController = new CountController(incrementButtonMock,
                                          countModelMock,
                                          countViewMock,
                                          countPersisterMock);
  });

  describe("::new", function() {
    it("should set countView to initial count", function() {
      expect(countViewMock.display).toHaveBeenCalledWith(0);
    });
  });

  describe("clicking increment button", function() {
    beforeEach(function() {
      countPersisterMock.set.and.callFake(function(_, callback) {
        callback();
      });
    });

    it("should set things up so button click updates count model", function() {
      clickHandler();
      expect(countModelMock.increment).toHaveBeenCalled();
    });

    it("should set things up so button click updates count view", function() {
      clickHandler();
      expect(countViewMock.display.calls.all()[0].args).toEqual([0]);

      // would actually be [1], but too brittle to mock incrementing
      // behaviour in mock
      expect(countViewMock.display.calls.all()[1].args).toEqual([0]);
    });
  });
});
