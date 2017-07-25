
import java.util.*;


public class Solution {
    public static List<String> letterCombinations(String digits) {
        LinkedList<String> ans = new LinkedList<String>();
        if(digits == null || digits.length() == 0){
            return ans;
        }
        String[] mapping = new String[] {" ", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        ans.add("");
        for(int i =0; i<digits.length();i++){
            int x = Character.getNumericValue(digits.charAt(i));
            while(ans.peek().length()==i){
                String t = ans.remove();
                for(char s : mapping[x].toCharArray())
                    ans.add(t+s);
            }
        }
        return ans;
    }
    public static void main(String arg[]) {
        System.out.println(letterCombinations("23"));
        System.out.println(letterCombinations("07"));
        System.out.println(letterCombinations("67"));
        System.out.println(letterCombinations("61"));
    }
}
