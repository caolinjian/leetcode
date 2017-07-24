/**
 * @param {string} s
 * @return {number}
 */
// js 还是这个更快  (⊙﹏⊙)b
// var lengthOfLongestSubstring = function(s) {
//     let subArr=[];
//     let max = 0;
//     for(let i=0,len=s.length;i<len;i++){
//         let index = subArr.indexOf(s[i]);
//         if(index>=0){
//             subArr.splice(0,index+1)
//         }
//         subArr.push(s[i]);
//         max=subArr.length>=max?subArr.length:max;
//     }
//     return max
// };
var lengthOfLongestSubstring = function(s) {
    let used={};
    let start=max = 0;
    for(let i=0,len=s.length;i<len;i++){
        if(typeof used[s[i]] !== 'undefined' && start<=used[s[i]]){
            start=used[s[i]]+1
        }else{
            max=Math.max(i-start+1,max)
        }
        used[s[i]]=i

    }
    return max
};
