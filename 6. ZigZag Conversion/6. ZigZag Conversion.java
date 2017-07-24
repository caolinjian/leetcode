
import com.sun.deploy.util.ArrayUtil;

import java.util.*;


public class Solution {
    public static String convert(String s, int numRows) {
        int size = s.length();
        if(numRows == 1||numRows>=size){
            return s;
        }
        StringBuffer[] result = new StringBuffer[numRows];
        int step=1;
        int index =0;
        for(int i=0;i<size;i++){
            if(result[index]==null){
                result[index] = new StringBuffer("");
            }
            result[index].append(""+s.charAt(i));
            if(index==0){
                step=1;
            }else if(index==numRows-1){
                step=-1;
            }
            index+=step;
        }
        StringBuffer a = new StringBuffer();
        for(StringBuffer sb : result){
            a.append(sb.toString());
        }
        return a.toString();
    }
    public static String convert2(String s, int numRows) {
        int size = s.length();
        if(numRows == 1||numRows>=size){
            return s;
        }
        int distance = 2*numRows-2;
        int k = 0;
        char[] result = new char[size];
        for(int i=0; i < numRows; i++)
        {
            for(int j=i;j<size;j=j+distance)
            {
                result[k++] = s.charAt(j);
                if(i>0 && i<numRows-1 && j+distance-2*i < size)
                {
                    result[k++] = s.charAt(j+distance-2*i);
                }
            }
        }
        return new String(result);
    }
    public static void main(String arg[]) {
        System.out.println(convert2("PAYPALISHIRING",3));
        System.out.println(convert2("PAYPALISHIRING",4));
    }
}
