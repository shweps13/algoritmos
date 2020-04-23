first = [10, 20, 30, 40]
second = [27, 29, 37, 48, 93]

def sorted_arrays(first_arr, second_arr):
    first_arr.extend(second_arr)
    first_arr.sort()
    print(first_arr)
    return first_arr

sorted_arrays(first, second)