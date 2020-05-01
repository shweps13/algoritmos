def almostIncreasingSequence(seq):
    count = 0
    if(len(seq) == 2):
        return True
    for i in range(1, len(seq)):
        if seq[i] <= seq[i-1]:
            count+=1
        if count > 1:
            return False
        if len(seq)-1 >= i+1 and i >= 2 and seq[i] <= seq[i-2] and seq[i+1] <= seq[i-1]:
            return False
    return True