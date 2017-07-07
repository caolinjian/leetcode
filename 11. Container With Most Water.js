/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0,r=height.length-1,
    res=0,tempRes=0;
    while(l<r){
        if(height[l]<height[r]){
            tempRes=(r-l)*height[l]
            if(tempRes>res){
                res=tempRes
            }
            l+=1
        }else{
            tempRes=(r-l)*height[r]
            if(tempRes>res){
                res=tempRes
            }
            r-=1
        }
    }
    return res
};
