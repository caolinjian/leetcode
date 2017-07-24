
import java.util.*;


public class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        int minNum;
        int len = nums.length;
        for (int i = 0; i + 2 < len; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {              // skip same result
                continue;
            }
            int j = i + 1, k = len - 1;
            int target = -nums[i];
            minNum = target - nums[k];
            while(j < len && nums[j] < minNum) ++j;
            while (j < k) {
                if (nums[j] + nums[k] == target) {
                    res.add(Arrays.asList(nums[i], nums[j], nums[k]));
                    while (j < k && nums[j] == nums[j + 1]) j++;  // skip same result
                    j++;
                    while (j < k && nums[k] == nums[k - 1]) k--;  // skip same result
                    k--;
                } else if (nums[j] + nums[k] > target) {
                    k--;
                } else {
                    j++;
                }
            }
        }
        return res;
    }
    public static void main(String arg[]) {
        System.out.println(threeSum(new int[]{0,0,0}));
    }
}
