class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dict = {};
        for i in range(len(nums)):
            j = target-nums[i]
            if j in dict:
                return [dict[j],i]
            dict[nums[i]]=i
