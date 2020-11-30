#!/bin/python3

import math
import os
import random
import re
import sys


#
    # need to find range that works for each filter
        #       10------------20
        #5-------------15
        #5----------------------------30
        #       |///////|   => [10 - 15]
        
        # Need to get max element from first settings of filters
        # and min el from second
    # then loop through array and check elements => compare between min and max filt


def countSignals(frequencies, filterRanges):
    
    # creating arrays for left and right sides of filter settings
    filter_left = []
    filter_right = []
    for i in filterRanges:
        filter_left.append(i[0])
    for i in filterRanges:
        filter_right.append(i[1])
    
    # receiving main filter
    filter_main = []
    filter_main.append(max(filter_left))
    filter_main.append(min(filter_right))

    print('Main filter:', filter_main)
    
    # filtering frequencies
    res = []
    for i in frequencies:
        if i >= filter_main[0] and i<= filter_main[1]:
            res.append(i)
    
    print('Frequencies defore filter =>', frequencies)
    print('Frequencies after filter =>', res)

    return len(res)
if __name__ == '__main__':