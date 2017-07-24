class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        result = ['']*numRows
        step =1
        index =0
        for i in xrange(len(s)):
            result[index]+=s[i]
            if index == 0:
                step = 1
            elif index == numRows-1:
                step = -1
            index += step

        return ('').join(result)
        
