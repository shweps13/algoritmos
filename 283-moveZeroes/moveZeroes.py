class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        cache = 0
        for i in range(len(nums) - 1):
            if nums[i] == 0:
                next_el = nums[i+1]
                # print('Next =>', nums[i+1], 'position', i)
                if next_el != 0:
                    nums[i] = nums[i+1]
                    nums[i+1] = 0
                elif next_el == 0:
                    # print(nums, 'Position', i)
                    cache = 0
                    while next_el == 0:
                        cache += 1
                        # print('cache ==>', cache)
                        if i + cache == len(nums) - 1:
                            # print('azazaz')
                            return
                        next_el = nums[i+1+cache]
                    print('Next is =>', nums[i+1+cache])
                    nums[i] = nums[i+1+cache]
                    nums[i+1+cache] = 0
        print('Cache ==>', cache, '==>', )
                