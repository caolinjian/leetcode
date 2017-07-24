
import java.util.*;


public class Solution {
    public static boolean isMatch(String s, String p) {
        int sLen = s.length();
        int pLen = p.length();
        int i,j;
        boolean [][] dp = new boolean [pLen+1][sLen+1];
        dp[0][0] = true;
        for(i=2;i<=pLen;i++){
            dp[i][0]=dp[i-2][0] && p.charAt(i-1)=='*';
        }
        for(i=1;i<=pLen;i++){
            for(j=1;j<=sLen;j++){
                if(p.charAt(i-1)!='*'){
                    dp[i][j] = dp[i-1][j-1]&&(p.charAt(i-1)==s.charAt(j-1)||p.charAt(i-1)=='.');
                }else{
                    dp[i][j]=dp[i-2][j]||dp[i-1][j];
                    if(p.charAt(i-2)==s.charAt(j-1)||p.charAt(i-2)=='.'){
                        dp[i][j] = dp[i][j]||dp[i][j-1];
                    }
                }
            }
        }
        return dp[pLen][sLen];
    }
    public static void main(String arg[]) {
        System.out.println(isMatch("ab", ".*"));
        System.out.println(isMatch("aab", "c*a*b"));
    }
}
