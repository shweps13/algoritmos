def shapeArea(n):
    if n < 0 or n == 0:
        return 0
    elif n > 0:
        total = 1
        for i in range(n):
            total = total + 4 * i
        print(total)
        return total

shapeArea(3)