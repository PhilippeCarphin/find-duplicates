/**
 * find-duplicates
 *
 * @author    Pierre-Emmanuel Lévesque
 * @email     pierre.e.levesque@gmail.com
 * @copyright 2018, Pierre-Emmanuel Lévesque
 * @license   MIT
 */
"use strict";

let isEqual = require('lodash.isequal');

function findDuplicates(arr, duplicates, mark) {
    duplicates = duplicates == null ? [] : duplicates;
    let indexes = [];

    let startIndex = typeof mark === "undefined"
        ? 0
        : arr.findIndex(v => v != mark);

    if (startIndex == -1) {
        return duplicates;
    }

    for (let i = startIndex; i < arr.length; i++) {
        if (isEqual(arr[i], arr[startIndex])) {
            indexes.push(i);
        }
    }

    if (indexes.length > 1) {

        if (typeof mark === "undefined") {
            mark = arr[startIndex];
        }

        let newArr = arr.map(
            (i,v) => (v == 0 || indexes.indexOf(v) != -1 ? mark : i)
        )

        duplicates.push(indexes);
        findDuplicates(newArr, duplicates, mark);
    }

    return duplicates;
}

module.exports = findDuplicates;
