#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'equalizeArray' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#


# receiving the array with nums
# loop thru these elements and put them to the dict
# check the element with dict > 1
# return len(arr) - quantity of el

def equalizeArray(arr):
    print(arr)
    elements = dict()

    # test point
    for i in (arr):
        elements[i] = 0

    for i in (arr):
        elements[i] = elements[i] + 1
    print(elements)
    # elements inside dict now
    
    # checking max value now
    max_value = max(elements.values())
    print(max_value)

    result = len(arr) - max_value
    print(result)

    return result

if __name__ == '__main__':