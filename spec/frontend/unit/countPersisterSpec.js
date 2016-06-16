"use strict";

describe("CountPersister", function() {
  describe("createCountPersister", function() {
    it("should create new countPersister instance", function() {
      var subject = createCountPersister();
      expect(subject.get).toBeDefined();
    });
  });

  describe("#get", function() {
    it("should get /count URL", function() {
      var $Mock = { get: null };
      spyOn($Mock, "get");

      var subject = createCountPersister($Mock);
      subject.get(jasmine.createSpy("callback"));

      expect($Mock.get).toHaveBeenCalledWith("/count", jasmine.any(Function));
    });

    it("should return count to callback", function() {
      var serverResponse = { count: 5 };
      var $Mock = { get: null };
      var callbackSpy = jasmine.createSpy("callback");
      spyOn($Mock, "get")
        .and
        .callFake(function(_, callback) {
          callback(serverResponse);
        });

      var subject = createCountPersister($Mock);
      subject.get(callbackSpy);

      expect(callbackSpy).toHaveBeenCalledWith(serverResponse.count);
    });
  });

  describe("#set", function() {
    it("should send post and count to /count URL", function() {
      var count = 5;
      var $Mock = { post: null };
      spyOn($Mock, "post");

      var subject = createCountPersister($Mock);
      subject.set(5);

      expect($Mock.post).toHaveBeenCalledWith("/count", { count: count });
    });
  });
});
