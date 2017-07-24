class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        l,r  = 0,len(height) - 1
        res,tempRes = 0,0
        while l < r:
            if height[l] < height[r]:
                tempRes = (r - l) * height[l]
                if  tempRes > res:
                    res = tempRes
                l += 1
            else:
                tempRes = (r - l) *height[r]
                if tempRes > res:
                    res = tempRes
                r -= 1
        return  res
