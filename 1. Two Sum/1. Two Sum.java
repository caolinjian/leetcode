import java.util.HashMap;
public class Solution {
    public static int[] twoSum(int[] nums, int target) {
        Map dict = new HashMap(20050);
        int [] result = new int[2];
        for(int i=0;i<nums.length;i++){
            if(dict.containsKey(target-nums[i])){
                result[0] = (int)dict.get(target-nums[i]);
                result[1] = i;
                return result;
            }
            dict.put(nums[i],i);
        }
        return result;
    }
    public static int[] twoSum2(int[] nums, int target) {
        if(nums == null)
                return null;
            int[] nums2 = Arrays.copyOf(nums, nums.length);
            Arrays.sort(nums2);
            int a = 0, b = 0;
            int start = 0, end = nums2.length-1;
            //find two nums
            while(start<end){
                int sum = nums2[start] + nums2[end];
                if(sum < target)
                    start++;
                else if(sum > target)
                    end--;
                else{
                    a = nums2[start]; b = nums2[end];
                    break;
                }
            }
            //find the index of two numbers
            int[] res = new int[2];
            for(int i = 0; i < nums.length; i++){
                if(nums[i] == a){
                    res[0] = i;
                    break;
                }
            }
            if(a != b){
                for(int i = 0; i < nums.length; i++){
                    if(nums[i] == b){
                        res[1] = i;
                        break;
                    }
                }
            } else{
                for(int i = 0; i < nums.length; i++){
                    if(nums[i] == b && i != res[0]){
                        res[1] = i;
                        break;
                    }
                }
            }

            return res;
    }
    public static int[] twoSum3(int[] nums, int target) {
        short[] map = new short[20050];
        int size = 50;
        for (int i = 0; i < nums.length; i++) {
            int diff = target-nums[i]+size;// diff是为了防止target-nums[i]<0 map[diff]越界   size是考虑到有负值的存在也要防越界做得偏移。数组的最大值大于size+target 或者小与-size会报错
            if (diff < 0) continue;
            short d = map[diff];
            if(d>0){
                return new int[]{d-1,i};
            }
            map[nums[i]+size]=(short)(i+1);
        }
        return null;
    }
    public static void main(String arg[]){
        int [] a= {2,3,4};
        int [] result = twoSum(a,7);
        int[] b = {14, -50, 3, 4, 1, 6, 8, 10, 11, 12, 13, 15};
        int[] result = twoSum3(b, 29);
        for(int i:result){
            System.out.println(i);
        }
    }
}
