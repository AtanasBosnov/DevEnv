const assert = require("chai").assert;
const app = require("../public/js/app");
const router = require("../routes/api");

describe("app", function() {
  it("app should return hello", function() {
    assert.equal(app(), "hello");
  });
});
