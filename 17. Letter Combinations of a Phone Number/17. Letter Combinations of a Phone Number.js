/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    if (!digits) {
        return res;
    }
    const map = [
        ' ',
        '1',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ];
    res.push('');
    for (let i = 0; i < digits.length; i++) {
        let c = digits[i];
        while (res[0].length == i) {
            let s = res.shift();
            for (let j = 0; j < map[c].length; j++) {
                res.push(s + map[c][j])
            }
        }
    }
    return res
};
var chai = require('chai');
var assert = chai.assert;

describe('sameMembers', () => {
  it('sameMembers test 23', () => {
    assert.sameMembers(letterCombinations('23'), [
        "ad",
        "ae",
        "af",
        "bd",
        "be",
        "bf",
        "cd",
        "ce",
        "cf"
    ], 'same members');
  });
  it('sameMembers test 4', () => {
    assert.sameMembers(letterCombinations('4'), [
        "g",
        "h",
        "i",
    ], 'same members');
  });
  it('sameMembers test []', () => {
    assert.sameMembers(letterCombinations(), [], 'same members');
  });
});
