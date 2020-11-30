class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        founded = []
        print(nums)
        for i in nums:
            # print(i)
            index = abs(i) - 1
            if nums[index] < 0:
                founded.append(index+1)
            nums[index] = -nums[index]
        print(founded)
        return founded