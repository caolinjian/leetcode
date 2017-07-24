class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        nums.sort()
        for i in xrange(len(nums)-2):
            if nums[i] >0:
                break
            if i > 0 and nums[i] == nums[i-1]:
                continue
            l, r = i+1, len(nums)-1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s < 0:
                    while l < r and nums[l] == nums[l+1]:
                        l += 1
                    l +=1
                elif s > 0:
                    while l < r and nums[r] == nums[r-1]:
                        r -= 1
                    r -= 1
                else:
                    res.append((nums[i], nums[l], nums[r]))
                    while l < r and nums[l] == nums[l+1]:
                        l += 1
                    while l < r and nums[r] == nums[r-1]:
                        r -= 1
                    l += 1; r -= 1
        return res

class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """

        count = {}
        for x in nums:
            count[x] = count.get(x, 0) + 1
        pos = sorted([x for x in count.keys() if x >= 0])
        neg = sorted([x for x in count.keys() if x < 0], reverse=True)
        output = []
        if count.get(0, 0) >= 3:
            output.append([0, 0, 0])
        for p in pos:
            for n in neg:
                d = 0 - p - n
                if (d == p or d == n) and count[d] >= 2:
                    output.append([n, d, p])
                if d in count and d > n and d < p:
                    output.append([n, d, p])

        return output
