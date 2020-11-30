# for loop main arr
#   => took positions of -1s to separate dict
#   => took all elements to separate arr
#       => sort that arr
#   => join positions from dict and sorted arr


def sortByHeight(a):
    result, sort = list(), list()
    temp = dict()
    for i in range(len(a)):
        if a[i] == -1:
            temp[i] = -1
        else:
            sort.append(a[i])
    result = sorted(sort)
    print(temp)
    
    for j in temp:
        result.insert(j, -1)
    print(result)

    return result

