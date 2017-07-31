/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return partion(lists,0,lists.length-1);
};
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(0);
    let current = result;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next
        } else {
            current.next = l2;
            l2 = l2.next
        }
        current=current.next
    }
    current.next = l1 || l2;
    return result.next;
};
var partion = function (lists,l,r) {
    if (l > r)
        return null;
    if (r == l)
        return lists[r];
    if (r - l == 1) {
        return mergeTwoLists(lists[l], lists[r]);
    }
    let mid = (l + r) >> 1;
    let lNode = partion(lists, l, mid);
    let rNode = partion(lists, mid + 1, r);
    return mergeTwoLists(lNode, rNode);
}
