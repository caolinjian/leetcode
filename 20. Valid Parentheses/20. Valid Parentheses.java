
import java.util.*;


public class Solution {
    public static boolean isValid2(String s) {
        Stack<Integer> p = new Stack<>();
        for(int i = 0; i < s.length(); i++) {
            int q = "(){}[]".indexOf(s.charAt(i));
            if(q % 2 == 1) {
                if(p.isEmpty() || p.pop() != q - 1) return false;
            } else p.push(q);
        }
        return p.isEmpty();
    }
    public static boolean isValid(String s) {
        if (s.isEmpty()) return true;
        char[] chars = s.toCharArray();
        char[] stack = new char[chars.length + 1];
        stack[0] = '-';
        int p = 1;
        for (int i = 0; i < chars.length; i++) {
            char c = chars[i];
            switch(c) {
                case '(':
                    stack[p++] = ')';
                    break;
                case '[':
                    stack[p++] = ']';
                    break;
                case '{':
                    stack[p++] = '}';
                    break;
                default:
                    if (stack[--p] != c) return false;
            }
        }
        return p == 1;
    }
    public static void main(String arg[]) {
        System.out.println(isValid("{}[]()"));
        System.out.println(isValid("[]({}[])[{}()]()([])"));
        System.out.println(isValid("{}[(]())"));
        System.out.println(isValid("[]{}]"));
    }
}
