/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 // js数组原生排序不够快，而且python快一些
 // var findMedianSortedArrays = function(nums1, nums2) {
 //      let arr = nums1.concat(nums2);
 //     let median = 0;
 //
 //     arr = arr.sort((a,b)=>a-b);
 //     let n = arr.length;
 //     if (n % 2 === 0) {
 //         median = (arr[n/2] + arr[n/2-1])/2;
 //     } else {
 //         median = arr[Math.floor(n/2)];
 //     }
 //     return median;
 // };

var findMedianSortedArrays = function(nums1, nums2) {

    var index1 = 0;
    var index2 = 0;
    var lastNum = 0;
    var currNum = 0;

    var count = nums1.length + nums2.length;
    var half = Math.ceil((count + 1)/2);
    for(var j=0; j<half; j++){
        var use1 = index1 < nums1.length && (index2 >= nums2.length || nums1[index1] < nums2[index2]);
        lastNum = currNum;
        currNum = use1 ? nums1[index1] : nums2[index2];
        index1 += use1 ? 1 : 0;
        index2 += use1 ? 0 : 1;
    }

    return count % 2 === 0 ? (lastNum + currNum)/2 : currNum;
};
