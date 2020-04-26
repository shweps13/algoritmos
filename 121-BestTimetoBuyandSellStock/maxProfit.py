class Solution:
    def maxProfit(self, prices: List[int]) -> int:        
        lowest = float("inf")
        profit = 0
        for i in prices:
            if i > lowest:
                if i - lowest > profit:
                    profit = i - lowest
            elif i < lowest:
                lowest = i
        print(profit)
        return profit