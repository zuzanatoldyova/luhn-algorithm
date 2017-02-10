var assert = require("chai").assert;
var functions = require('../luhn-numbers.js');

describe("Luhn numbers", function() {
  it("should return true if number is a luhn number", function() {
    var num1 = 79927398713;
    var result = functions.isNumber(num1);
    assert.isTrue(result);
  });

  it("should return true if number is a luhn number", function() {
    var num2 = 9;
    var result = functions.isNumber(num2);
    assert.isFalse(result);
  });

  it("should return true if number is a luhn number", function() {
    var num3 = "hello";
    var result = functions.isNumber(num3);
    assert.isFalse(result);
  });

  it("should return true if number is a luhn number", function() {
    var num4 = 15325780;
    var result = functions.isNumber(num4);
    assert.isTrue(result);
  });

  it("should return true if result is an array of digits", function() {
    var num5 = 15325780;
    var result = functions.getDigits(num5);
    assert.deepEqual(result, ['1', '5', '3', '2', '5', '7', '8', '0']);
  });

  it("should return true if result is an array of digits", function() {
    var num6 = 5468;
    var result = functions.getDigits(num6);
    assert.deepEqual(result, ['5', '4', '6', '8']);
  });

  it("should return true if sum is a luhn sum", function() {
    var arr1 = ['10', '4', '0'];
    var result = functions.luhnSum(arr1);
    assert.isFalse(result === 14);
  });

  it("should return true if sum is a luhn sum", function() {
    var arr2 = ['10', '4', '0'];
    var result = functions.luhnSum(arr2);
    assert.isTrue(result === 5);
  });

});
