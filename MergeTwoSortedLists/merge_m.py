lists_arr = [[32, 33],
[10, 20, 30, 40],
[15, 25, 35],
[27, 29, 37, 48, 93]]

# waiting for [10, 15, 20, 25, 27, 29, 30, 32, 33, 35, 37, 40, 48, 93]

def sorted_arrays(lists):
    result = []
    for i in lists:
        result.extend(i)
    result.sort()
    print(result)
    return lists

sorted_arrays(lists_arr)