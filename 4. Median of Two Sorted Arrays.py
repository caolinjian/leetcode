# class Solution(object):
#     def findMedianSortedArrays(self, nums1, nums2):
#         """
#         :type nums1: List[int]
#         :type nums2: List[int]
#         :rtype: float
#         """
#         index1=index2=lastNum=currNum=0
#         count = len(nums1)+len(nums2)
#         half = (count+1)/2+(count+1)%2
#         for j in range(half):
#             use1 = index1 < nums1.length and (index2 >= nums2.length or nums1[index1] < nums2[index2])
#             lastNum = currNum
#             currNum = nums1[index1] if use1 else nums2[index2]
#             index1 += 1 if use1 else 0
#             index2 += 0 if use1 else 1
#
#         return ((lastNum + currNum)/2 if count % 2 === 0 else currNum)

class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        median=0.0
        nums=nums1+nums2
        nums.sort()
        if len(nums)%2==1:
            median=nums[(len(nums)-1)/2]
        else:
            median=(nums[len(nums)/2]+nums[len(nums)/2-1])/2.0
        return median
