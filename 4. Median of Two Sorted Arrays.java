
import java.util.*;


public class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int index1 = 0;
        int index2 = 0;
        int lastNum = 0;
        int currNum = 0;
        int count = nums1.length+nums2.length;
        double half = Math.ceil((count+1.0)/2);
        for(int j=0;j<half;j++){
            boolean use1 = index1 < nums1.length && (index2 >= nums2.length || nums1[index1] < nums2[index2]);
            lastNum = currNum;
            currNum = use1 ? nums1[index1] : nums2[index2];
            index1 += use1 ? 1 : 0;
            index2 += use1 ? 0 : 1;
        }
        return count % 2 == 0 ? (lastNum + currNum)/2.0 : currNum;
    }

    public static double findMedianSortedArrays2(int[] nums1, int[] nums2) {
        int len = nums1.length + nums2.length;
        if (len % 2 == 1) {
            return findKth(nums1, 0, nums2, 0, len / 2 + 1);
        }
        return (
                findKth(nums1, 0, nums2, 0, len / 2) + findKth(nums1, 0, nums2, 0, len / 2 + 1)
        ) / 2.0;
    }
    public static int findKth(int[] A, int A_start,
                              int[] B, int B_start,
                              int k){
        if (A_start >= A.length) {
            return B[B_start + k - 1];
        }
        if (B_start >= B.length) {
            return A[A_start + k - 1];
        }

        if (k == 1) {
            return Math.min(A[A_start], B[B_start]);
        }

        int A_key = A_start + k / 2 - 1 < A.length
                ? A[A_start + k / 2 - 1]
                : Integer.MAX_VALUE;
        int B_key = B_start + k / 2 - 1 < B.length
                ? B[B_start + k / 2 - 1]
                : Integer.MAX_VALUE;

        if (A_key < B_key) {
            return findKth(A, A_start + k / 2, B, B_start, k - k / 2);
        } else {
            return findKth(A, A_start, B, B_start + k / 2, k - k / 2);
        }
    }
    public static void main(String arg[]) {
        System.out.println(findMedianSortedArrays2(new int []{1,2},new int []{3,4}));
        System.out.println(findMedianSortedArrays2(new int []{1,3},new int []{2}));
    }
}
