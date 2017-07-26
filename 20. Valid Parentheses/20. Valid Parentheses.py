class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s)%2==1:
            return False
        stack = []
        dict = {"]":"[", "}":"{", ")":"("}
        for char in s:
            if char in dict:
                stack.append(char)
            else:
                if not stack or dict[char] != stack.pop():
                    return False
        return not stack
