class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dict = {};
        for i,n in enumerate(nums):
            j = target-n
            if j in dict:
                return [dict[j],i]
            dict[n]=i

        # map = [0]*20050
        # size = 50
        # for i,n in enumerate(nums):
        #     diff = target-n+size
        #     if diff < 0:
        #         continue
        #     d = map[diff]
        #     if d>0:
        #         return [d-1,i]
        #     map[n+size]=i+1

        # nums2=nums[:]
        # nums2.sort()
        # a=b=start=0
        # end=len(nums2)-1
        # while start<end:
        #     sum = nums2[start]+nums2[end]
        #     if sum<target:
        #         start+=1
        #     elif sum>target:
        #         end-=1
        #     else:
        #         a = nums2[start]
        #         b = nums2[end]
        #         break;
        # res = [0,0]
        # for i,n in enumerate(nums):
        #     if n == a:
        #         res[0] = i
        #         break
        #
        # if a!=b:
        #     for i,n in enumerate(nums):
        #         if n == b:
        #             res[1] = i
        #             break
        # else:
        #     for i,n in enumerate(nums):
        #         if n == b and i != res[0]:
        #             res[1] = i
        #             break
        # return res
