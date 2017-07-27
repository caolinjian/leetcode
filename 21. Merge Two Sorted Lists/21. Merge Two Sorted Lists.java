
import java.util.*;


public class Solution {
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode result = new ListNode(0);
        ListNode current = result;
        while(l1!=null&&l2!=null){
            if(l1.val<l2.val){
                current.next=l1;
                l1=l1.next;
            }else{
                current.next=l2;
                l2=l2.next;
            }
            current=current.next;
        }
        current.next = l1!=null ?l1: l2;
        return result.next;
    }
    public static void main(String arg[]) {
        ListNode a = new ListNode(1);
        ListNode b = new ListNode(2);
        System.out.println(mergeTwoLists(a,b));
    }
}
