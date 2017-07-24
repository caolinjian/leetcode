
import java.util.*;


public class Solution {
    public static int maxArea(int[] height) {
        int l=0;
        int r=height.length-1;
        int res =0;
        int tempRes = 0;
        while (l<r){
            if(height[l]<height[r]){
                tempRes = (r-l)*height[l];
                if(tempRes>res){
                    res=tempRes;
                }
                l++;
            }else{
                tempRes=(r-l)*height[r];
                if(tempRes>res){
                    res=tempRes;
                }
                r--;
            }
        }
        return res;
    }
    public static void main(String arg[]) {
        System.out.println(maxArea(new int []{2,3,4}));
    }
}
