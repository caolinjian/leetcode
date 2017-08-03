
import java.util.*;


public class Solution {

    public static List<String> generateParenthesis(int n) {
        List<String> list = new ArrayList<String>();
        dfs("", list, n, n);
        return list;
    }
    public static void dfs(String sublist, List<String> list, int left, int right){
        if(left > right){
            return;
        }
        if(left > 0){
            dfs( sublist + "(" , list, left-1, right);
        }
        if(right > 0){
            dfs( sublist + ")" , list, left, right-1);
        }
        if(left == 0 && right == 0){
            list.add(sublist);
            return;
        }
    }
    public static void main(String arg[]) {
        System.out.println(generateParenthesis(4));
    }
}
