
import java.util.*;


public class Solution {
    public static String longestPalindrome2(String s) {
        int len = s.length();
        int max =1;
        int start = 0;
        int newLen = 0;
        if(len <=1){
            return s;
        }
        for(int i =0;i<len;){
            if(len-i<=max/2){
                break;
            }
            int j=i;
            int k=i;
            while(k<len-1&&s.charAt(k)==s.charAt(k+1)){
                k++;
            }
            i=k+1;
            while(k<len-1&&j>0&&s.charAt(k+1)==s.charAt(j-1)){
                k++;
                j--;
            }
            newLen = k-j+1;
            if (newLen > max){
                max = newLen;
                start = j;
            }
        }
        return s.substring(start, start+max);
    }
    public static String longestPalindrome(String s) {
        if (s == null) {
            return "";
        }
        char[] arr = s.toCharArray();
        int max = 0;
        int maxi = 0;
        int maxj = 0;

        int len = arr.length;

        for (int i = 0; i < len;) {
            int i1 = getFarestSameElementIndex(arr, i,len);
            int dist = getDistance(arr, i, i1,len);
            int index1 = i - dist;
            int index2 = i1 + dist;
            int l = index2 - index1;
            if (l > max) {
                max = l;
                maxi = index1;
                maxj = index2;
            }
            i = i1 + 1;
        }

        return s.substring(maxi, maxj + 1);
    }

    private static int getDistance(char[] arr, int index1, int index2,int len) {
        int i1 = index1 - 1;
        int i2 = index2 + 1;
        int dist = 0;
        while (i1 >= 0 && i2 < len) {
            if (arr[i1] == arr[i2]) {
                dist++;
            } else {
                break;
            }
            i1--;
            i2++;
        }
        return dist;
    }

    private static int getFarestSameElementIndex(char[] arr, int index,int len) {
        for (int i = index + 1; i < len; i++) {
            if (arr[i] != arr[index]) {
                return i - 1;
            }
        }
        return len - 1;
    }
    public static void main(String arg[]) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
        System.out.println(longestPalindrome("aaabcba"));
    }
}
