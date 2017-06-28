# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        head=tail=ListNode(0)
        carry=0
        while l1 or l2 or carry:
            d1 = l1.val if l1 else 0
            d2 = l2.val if l2 else 0
            carry,sum=divmod(d1+d2+carry,10)

            tail.next = ListNode(sum)
            tail=tail.next

            l1=l1.next if l1 else None
            l2=l2.next if l2 else None

        return head.next
