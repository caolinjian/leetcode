/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1,l2) {
    let head=new ListNode(0);
    let tail=head;
    let carry=0;
    while(l1||l2||carry){
        let sum = 0;
        let d1 = l1?l1.val:0;
        let d2 = l2?l2.val:0;
        sum = d1+d2;
        if(carry){
            sum+=carry;
            carry=0;
        }
        if(sum>9){
            sum=sum%10;
            carry=1;
        }
        tail.next=new ListNode(sum);
        tail=tail.next;
        l1=l1?l1.next:null;
        l2=l2?l2.next:null;
    }
    return head.next;
}
