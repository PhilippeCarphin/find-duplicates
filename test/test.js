"use strict";

let expect = require("chai").expect;
let findDuplicates = require("../index");

describe("#findDuplicates()", function() {

    it("should return [] with an empty array", function() {
        let arr = [];
        let result   = JSON.stringify(findDuplicates(arr));
        let expected = JSON.stringify([]);
        expect(result).to.equal(expected);
    });

    it("should return [] with an array without repetitions", function() {
        let arr = [0, 1, 2, 3, 4, 5];
        let result   = JSON.stringify(findDuplicates(arr));
        let expected = JSON.stringify([]);
        expect(result).to.equal(expected);
    });

    it("should return the indexes of one repeating element", function() {
        let arr = [0, 0, 1, 2, 0, 3, 0];
        let result   = JSON.stringify(findDuplicates(arr));
        let expected = JSON.stringify([[0, 1, 4, 6]]);
        expect(result).to.equal(expected);
    });

    it("should return the indexes of many repeating elements", function() {
        let arr = [0, 0, 1, 2, 0, 3, 0, 1, 1, 0, 2];
        let result   = JSON.stringify(findDuplicates(arr));
        let expected = JSON.stringify([[0, 1, 4, 6, 9], [2, 7, 8], [3, 10]]);
        expect(result).to.equal(expected);
    });

    it("should also work when elements are arrays", function() {
        let arr = [
            [0, 0, 0],
            [1, 1, 1],
            [1, 1, 1],
            [0, 0, 0],
            [2, 2, 2],
            [1, 2, 3],
            [1, 1, 1],
        ];
        let result   = JSON.stringify(findDuplicates(arr));
        let expected = JSON.stringify([[0, 3], [1, 2, 6]]);
        expect(result).to.equal(expected);
    });

});
