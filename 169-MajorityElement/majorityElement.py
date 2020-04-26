class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        if len(nums) > 1: 
            maj_dict = dict()
            for i in nums:
                if i in maj_dict:
                    maj_dict[i] =  maj_dict[i] + 1
                else:
                    maj_dict[i] = 1
            max_el = max(maj_dict.keys(), key=maj_dict.get)            
            return max_el
            
        elif len(nums) == 1:
            return nums[0]
        else: 
            return 0
        