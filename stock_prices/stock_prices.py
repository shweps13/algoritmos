#!/usr/bin/python

import argparse

def find_max_profit(prices):
    if len(prices) == 0:
        current_max_profit = 0
    elif len(prices) == 1:
        current_max_profit = -(prices[0])
    else:
        current_min = prices[0]
        current_max_profit = -(prices[0])
        for i in range(0, len(prices)-1):
            if prices[i] <= current_min:    
                current_min = prices[i]
            if i == (len(prices)-1) and current_min == prices[i]:
                    profit = -(prices[i])
                    if profit > current_max_profit:
                        current_max_profit = profit
                        return current_max_profit
            if (prices[i+1] - current_min) > current_max_profit:
                current_max_profit = (prices[i+1] - current_min)

    return current_max_profit

arr1 = [10, 7, 5, 8, 11, 9]
arr2 = [100, 90, 80, 50, 20, 10]
arr3 = [1050, 270, 1540, 3800, 2]
arr4 = [100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79]

print(find_max_profit(arr1))
print(find_max_profit(arr2))
print(find_max_profit(arr3))
print(find_max_profit(arr4))


# if __name__ == '__main__':
#   # This is just some code to accept inputs from the command line
#   parser = argparse.ArgumentParser(description='Find max profit from prices.')
#   parser.add_argument('integers', metavar='N', type=int, nargs='+', help='an integer price')
#   args = parser.parse_args()

#   print("A profit of ${profit} can be made from the stock prices {prices}.".format(profit=find_max_profit(args.integers), prices=args.integers))