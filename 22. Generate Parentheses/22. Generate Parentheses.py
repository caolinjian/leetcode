class Solution(object):


    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        if n <=0:
            return []

        def generateParenthesisHelper(left,right,path,res):
            if left==0 and right==0:
                res.append(path)
                return

            if left >0:
                generateParenthesisHelper(left-1,right,path+'(',res)

            if left<right:
                generateParenthesisHelper(left,right-1,path+')',res)

        res=[]
        generateParenthesisHelper(n,n,'',res)
        return res
