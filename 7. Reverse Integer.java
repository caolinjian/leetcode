
import java.util.*;


public class Solution {
    public static int reverse(int x) {
        long res = 0;
        boolean isNegative = false;
        if(x < 0){
            x *= -1;
            isNegative = true;
        }
        while(x > 0){
            res *= 10;
            res += x % 10;
            x /= 10;
        }
        if((isNegative && -res < Integer.MIN_VALUE) || (!isNegative && res > Integer.MAX_VALUE)) return 0;
        return isNegative ? (int) -res : (int) res;
    }
    public static void main(String arg[]) {
        System.out.println(reverse(321));
        System.out.println(reverse(-432));
    }
}
