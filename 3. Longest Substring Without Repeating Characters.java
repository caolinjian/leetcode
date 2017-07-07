
import java.util.*;


public class Solution {
    public static int lengthOfLongestSubstring2(String s) {
        StringBuffer sBuffer = new StringBuffer();
        char [] cs = s.toCharArray();
        int max = 0;
        for(char c : cs){
            int index = sBuffer.indexOf(""+c);
            if(index>=0){
                sBuffer = new StringBuffer(sBuffer.substring(index+1));
            }else{
                max = Math.max(max,sBuffer.length());
            }
            sBuffer.append(""+c);

        }
        return max;
    }
    public static int lengthOfLongestSubstring(String s) {
        Map<Character,Integer> used = new HashMap<Character,Integer>();
        int start=0,maxLength = 0;

        char [] cs = s.toCharArray();
        for(int i=0;i<cs.length;i++){
            if(used.containsKey(cs[i]) && used.get(cs[i])>=start){
                start = used.get(cs[i])+1;
            }else{
                maxLength = Math.max(maxLength,i-start+1);
            }
            used.put(cs[i],i);
        }
        return maxLength;
    }
    public static int lengthOfLongestSubstring3(String s) {
        if(s==null){
            return 0;
        }

        int start=0;
        int result=0;
        boolean[] flag = new boolean[256];

        for(int i=0;i<s.length();i++){
            char c= s.charAt(i);
            if(flag[c]){
                result = Math.max(result,i-start);
                for(int k=start;k<i;k++){
                    if(s.charAt(k)==c){
                        start=k+1;
                        break;
                    }
                    flag[s.charAt(k)]=false;
                }
            }
            else{
                flag[c]=true;
            }
        }

        return Math.max(result,arr.length-start);
    }
    public static void main(String arg[]) {
        System.out.println(lengthOfLongestSubstring3("abcabcbb"));
        System.out.println(lengthOfLongestSubstring3("pwwkew"));
        System.out.println(lengthOfLongestSubstring3("bbbbb"));
    }
}
