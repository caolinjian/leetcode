class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        isMinus = False
        if x<0:
            isMinus = True
            x=-x
        x=x.__str__()
        x=x[::-1]
        x=-int(x) if isMinus else int(x)
        if x<-2147483648 or x>2147483647:
            return 0

        return x
