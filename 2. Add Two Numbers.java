
import java.util.*;

class ListNode {
     int val;
      ListNode next;
     ListNode(int x) { val = x; }
  }

public class Solution {
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(0);
        ListNode tail = head;
        int carry = 0;
        while(l1!=null||l2!=null||carry>0){
            int sum = 0;
            int d1 = l1!=null?l1.val:0;
            int d2 = l2!=null?l2.val:0;
            sum = d1+d2;
            if(carry>0){
                sum+=carry;
                carry=0;
            }
            if(sum>9){
                sum=sum%10;
                carry=1;
            }
            tail.next = new ListNode(sum);
            tail=tail.next;
            l1=l1!=null?l1.next:null;
            l2=l2!=null?l2.next:null;
        }
        return head.next;
    }


    public static void main(String arg[]) {
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);
        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);
        ListNode a=addTwoNumbers(l1,l2);
        while(true) {
            System.out.println(a.val);
            if(a.next==null) {
                break;
            }
            a=a.next;
        }
    }
}
