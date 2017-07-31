
import java.util.*;

public class Solution {
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }
    public static ListNode mergeKLists(ListNode[] lists) {
        return  partion(lists,0,lists.length-1);
    }
    public static ListNode partion(ListNode[] lists, int l, int r) {
        if (l > r)
            return null;
        if (r == l)
            return lists[r];
        if (r - l == 1) {
            return mergeTwoKLists(lists[l], lists[r]);
        }
        int mid = (l + r) >> 1;
        ListNode lNode = partion(lists, l, mid);
        ListNode rNode = partion(lists, mid + 1, r);
        return mergeTwoKLists(lNode, rNode);
    }

    public static ListNode mergeTwoKLists(ListNode l1  ,ListNode l2) {
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
        System.out.println(mergeKLists(new ListNode[]{a}));
    }
}
