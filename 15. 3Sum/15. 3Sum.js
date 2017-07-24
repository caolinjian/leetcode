/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((x,y)=>x-y);
    let res=[];
    let len=nums.length;
    for(let i=0; nums[i] <= 0&&i<len-2;i++){
        if(i>0&&nums[i]===nums[i-1]) continue;
        let l = i+1;
        let r = nums.length-1;
        let minNum = -nums[i] - nums[r];
        while(l < len && nums[l] < minNum) ++l;
        while (l<r) {
            let sum = nums[r]+nums[l]+nums[i];
            if(sum===0){
                res.push([nums[i],nums[l],nums[r]]);
                while(l<r&&nums[l]==nums[l+1]) l++;
                l++;
                while(l<r&&nums[r]==nums[r-1]) r--;
                r--;
            }else if(sum>0){
                r--;
            } else{
                l++;
            }
        }
    }
    return res;
};
