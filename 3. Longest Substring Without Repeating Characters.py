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
        usedChar = {}
        start=result = 0
        for i in range(len(s)):
            if s[i] in usedChar and start<=usedChar[s[i]]:
                start=usedChar[s[i]]+1
            else:
                result = max(i-start+1,result)
            usedChar[s[i]]=i
            
        return result
