/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums,target) {
    let obj = {};
    for(let i = nums.length - 1;i>=0;i--){
        let j = target-nums[i];
        if(typeof obj[j] !== 'undefined'){
            return [obj[j],i]
        }
        obj[nums[i]] = i
    }
    return '404 not found'
}
