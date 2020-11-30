class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        smaller = []
        for i in range(len(nums)):
            counter = 0
            print(i)
            for j in range(len(nums)):
                if nums[i] > nums[j]:
                    counter = counter + 1
            smaller.append(counter)
        print(smaller)
                
        return smaller