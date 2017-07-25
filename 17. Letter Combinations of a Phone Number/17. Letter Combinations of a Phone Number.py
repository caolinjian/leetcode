class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """

        if  not digits:
            return []
        map = [' ','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
        res=['']
        for digit in digits:
            resTemp = []
            for s in res:
                for c in map[int(digit)]:
                    resTemp.append(s+c)
            res = resTemp
        return res
