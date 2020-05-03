def commonCharacterCount(s1, s2):
    temp1 = dict()
    for i in s1:
        if i in temp1:
            temp1[i] = temp1[i] + 1
        else:
            temp1[i] = 1
    print('dict =>', temp1)
    res = 0

    for j in s2:
        if j in temp1 and temp1[j] > 0:
            res += 1
            temp1[j] = temp1[j] - 1
 
    return res
