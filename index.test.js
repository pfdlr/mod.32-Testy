const assert = require("assert");
const formatDate = require("./index");

describe("formatDate", () => {
  describe("seconds", () => {
    it("should return seconds", () => {
      const actual = formatDate(23);

      const expected = "23s";

      assert.equal(actual, expected);
    });

    it("should return 0 seconds if no value is passed", () => {
      const actual = formatDate();

      const expected = "0s";

      assert.equal(actual, expected);
    });
  });

  describe("minutes", () => {
    it("should work for one digit minutes and seconds", () => {
      const actual = formatDate(61);

      const expected = "1m 1s";

      assert.equal(actual, expected);
    });

    it("should work for 2 digits minutes and seconds", () => {
      const actual = formatDate(1234);

      const expected = "20m 34s";

      assert.equal(actual, expected);
    });

    it("should return only minutes", () => {
      const actual = formatDate(120);

      const expected = "2m";

      assert.equal(actual, expected);
    });
  });

  describe("hours", () => {
    it("should work for one digit hours, minutes and seconds", () => {
      const actual = formatDate(3666);

      const expected = "1h 1m 6s";

      assert.equal(actual, expected);
    });

    it("should work for 2 digit hours, minutes and seconds", () => {
      const actual = formatDate(37220);

      const expected = "10h 20m 20s";

      assert.equal(actual, expected);
    });

    it("should work for hours only", () => {
      const actual = formatDate(18000);

      const expected = "5h";

      assert.equal(actual, expected);
    });

    it("should work for hours and minutes", () => {
      const actual = formatDate(18180);

      const expected = "5h 3m";

      assert.equal(actual, expected);
    });

    it("should work for hours and seconds", () => {
      const actual = formatDate(18050);

      const expected = "5h 50s";

      assert.equal(actual, expected);
    });
  });
});
