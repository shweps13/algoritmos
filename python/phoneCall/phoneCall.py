def phoneCall(min1, min2_10, min11, s):
    res = 0
    if s >= min1 :
        s = s - min1
        res += 1
    counter = 0
    while counter < min2_10 * 9:
        if s == 0 or s <= min2_10:
            return res
        else:
            s -= min2_10
            counter += min2_10
            res += 1
    print('Res =>', res, 'S =>', s)

    while s >= min11:
        s -= min11
        res += 1
    
    print('Res ->', res, 'S ->', s)
    
    return res

