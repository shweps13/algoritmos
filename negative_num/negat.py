class Solution(object):
    def countNegatives(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        rows, cols, rowp, colc = len(grid), len(grid[0]), 0, len(grid[0])
        res = 0
        
        def find_first_neg(arr):
            
            left, right = 0, len(arr) - 1
            while left <= right:
                
                mid = (left + right) // 2
                if arr[mid] < 0 :  right = mid - 1
                else: left = mid + 1
            
            return left
        
        for row_id, row in enumerate(grid):
            first_negative_in_row = find_first_neg(row)
            if first_negative_in_row != -1:
                res += cols - first_negative_in_row 
        
        return res