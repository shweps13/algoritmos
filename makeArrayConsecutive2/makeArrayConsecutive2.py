def bubble_sort(arr):
    for i in range(0, (len(arr) - 1)):
        for j in range(0, (len(arr) - 1)):
            if arr[j] > arr[(j+1)]:
                (arr[j], arr[(j+1)]) = (arr[j+1], arr[j])
    print(arr)
    return arr

def makeArrayConsecutive2(statues):
    # need to sort array first
    # make for loop to check that next el bigger
        # if it's bigger => move to next
        # if not => ++1 to counter
    # return counter
    
    statues_sorted = bubble_sort(statues)
    
    counter = 0
    check_el = statues_sorted[0]
    
    for i in range(len(statues_sorted)):
        if check_el == statues_sorted[i]:
            print('begin, got ==>', statues_sorted[i])
            check_el = statues_sorted[i] 

        elif statues_sorted[i] == check_el + 1:
            print('works fine:', statues_sorted[i])
            check_el = statues_sorted[i] 

        elif statues_sorted[i] != check_el + 1:
            current_el = statues_sorted[i - 1]
            print('ololo!', current_el)
            print('need to reach:', statues_sorted[i])
            while current_el != statues_sorted[i] - 1:
                current_el = current_el + 1
                counter = counter + 1
                print('Added', current_el, '==>',counter)

        elif statues_sorted[i] == statues_sorted[len(statues_sorted) - 1]:
            print('end', statues_sorted[i])
            return counter

    return counter


makeArrayConsecutive2([5, 7, 1, 8])