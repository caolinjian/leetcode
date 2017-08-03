class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        longest = 0
        left = 0
        st = []
        for i in xrange(s):
            if s[i] == '(':
                st.append(i)
            else:
                try :
                    st.pop()
                    if len(st) == 0:
                        longest=max(longest,i-left+1)
                    else:
                        longest=max(longest,i-a[-1])
                except:
                    index=i+1

        return longest
