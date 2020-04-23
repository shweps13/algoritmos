class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        myDict = dict()
        result = 0
        for i in nums:
            if i in myDict:
                myDict[i] = myDict[i] + 1 
            else:
                myDict[i] = 1
        
        for j in myDict:
            if myDict[j] == 1:
                result = j

        return result