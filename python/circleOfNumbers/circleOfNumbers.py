def circleOfNumbers(n, firstNumber):
    result = firstNumber + (n/2)
    if result >= n:
        result = result - n
    return result