class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums:
            return -1

        l,r = 0,len(nums)-1
        while l<r:
            mid = l+r>>1
            if nums[l]<=nums[mid]:
                if target >= nums[l] and target <= nums[mid]:
                    r=mid
                else:
                    l=mid+1
            else:
                if target >= nums[mid+1] and target <= nums[r]:
                    l=mid+1
                else:
                    r=mid

        return l if nums[l] == target else -1
