class Solution(object):
    # def lengthOfLongestSubstring(self, s):
    #     """
    #     :type s: str
    #     :rtype: int
    #     """
    #     arr = []
    #     result = 0
    #     for i in range(len(s)):
    #         if s[i] in arr:
    #             arr=arr[arr.index(s[i])+1:]
    #         arr.append(s[i])
    #         result = max(len(arr),result)
    #     return result
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        usedChar = dict()
        start=result = 0
        for i,c in enumerate(s):
            if c in usedChar and start<=usedChar[c]:
                start=usedChar[c]+1
            else:
                if i-start+1>result:
                    result = i-start+1
            usedChar[c]=i

        return result
