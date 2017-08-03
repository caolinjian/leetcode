/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return searchWithIndex(0, nums, target)
};
function searchWithIndex(index, nums, target) {
    let len = nums.length;
    if (len == 0) {
        return -1;
    }
    if (len == 1) {
        return nums[0] == target
            ? index
            : -1;
    }
    let mid = (len >> 1) - 1;
    if (nums[0] <= nums[mid]) {
        if (target >= nums[0] && target <= nums[mid]) {
            return findSort(index, nums.slice(0, mid + 1), target);
        } else {
            return searchWithIndex(index + mid + 1, nums.slice(mid + 1), target);
        }
    } else {
        if (target >= nums[mid + 1] && target <= nums[len - 1]) {
            return findSort(index + mid + 1, nums.slice(mid + 1), target);
        } else {
            return searchWithIndex(index, nums.slice(0, mid + 1), target);
        }
    }
}
function findSort(index, nums, target) {
    let len = nums.length;
    if (len == 1) {
        return nums[0] == target
            ? index
            : -1;
    }
    let mid = (len >> 1) - 1;
    if (target <= nums[mid]) {
        return findSort(index, nums.slice(0, mid + 1), target);
    } else {
        return findSort(index + mid + 1, nums.slice(mid + 1), target);
    }
}
var search2 = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = (l + r >> 1);
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target <= nums[mid]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        } else {
            if (target >= nums[mid + 1] && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
    }
    return nums[l] == target
        ? l
        : -1;
};

var chai = require('chai');
var assert = chai.assert;

describe('search', () => {
    it('[1,2,3],2', () => {
        assert.equal(1, search([
            1, 2, 3
        ], 2));
    });
    it('[4,1,2,3],4', () => {
        assert.equal(0, search([
            4, 1, 2, 3
        ], 4));
    });
    it('[2,3,4,0,1],0', () => {
        assert.equal(3, search([
            2, 3, 4, 0, 1
        ], 0));
    });
    it('[4,5,6,7,0,1,2],1', () => {
        assert.equal(5, search([
            4,
            5,
            6,
            7,
            0,
            1,
            2
        ], 1));
    });
});

describe('search2', () => {
    it('[1,2,3],2', () => {
        assert.equal(1, search2([
            1, 2, 3
        ], 2));
    });
    it('[4,1,2,3],4', () => {
        assert.equal(0, search2([
            4, 1, 2, 3
        ], 4));
    });
    it('[2,3,4,0,1],0', () => {
        assert.equal(3, search2([
            2, 3, 4, 0, 1
        ], 0));
    });
    it('[4,5,6,7,0,1,2],1', () => {
        assert.equal(5, search2([
            4,
            5,
            6,
            7,
            0,
            1,
            2
        ], 1));
    });
});
