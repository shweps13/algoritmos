def isLucky(n):
    N = str(n)
    N_half = int(len(N) / 2)
    sum1, sum2 = 0, 0

    for i in N[:N_half]:
        sum1 += int(i)
    for j in N[N_half:]:
        sum2 += int(j)

    print(sum1, 'and', sum2)

    if sum1 == sum2:
        return True
    else:
        return False