/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var searchRange = function(nums, target) {
    let l = 0;
    let r = nums.length-1;
    let mid=-1;
    let result = [-1,-1];
    while(l<=r){
        let m = (r-l>>1)+l;
        if(target>nums[m]){
            l=m+1
        }else if(target<nums[m]){
            r=m-1
        }else{
            mid = m;
            break
        }
    }
    if(mid != -1){
        for(let i=mid;i<=r;i++){
            if(nums[i]==target){
                result[1]=i;
            }
        }
        for(let i=mid;i>=l;i--){
            if(nums[i]==target){
                result[0]=i;
            }
        }
    }
    return result;
};

var chai = require('chai');
var assert = chai.assert;

describe('searchRange', () => {
  it('test [5, 7, 7, 8, 8, 10] 8', () => {
      assert.deepEqual([3,4],searchRange([5, 7, 7, 8, 8, 10],8));
  });
  it('test [] 8', () => {
      assert.deepEqual([-1,-1],searchRange([],8));
  });
  it('test [5, 7, 7, 8, 8, 10] 3', () => {
      assert.deepEqual([-1,-1],searchRange([5, 7, 7, 8, 8, 10],3));
  });
  it('test [5, 7, 7, 8, 8, 10] 5', () => {
      assert.deepEqual([0,0],searchRange([5, 7, 7, 8, 8, 10],5));
  });
  it('test [5] 5', () => {
      assert.deepEqual([0,0],searchRange([5],5));
  });
});
