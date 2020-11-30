# need to check that room free or not
# if room is free => mark element with the same index like 0 in next list
# when all matrix are checked => just make a sum of all elements

def matrixElementsSum(matrix):
    check_list = [True, True, True, True]
    for i in range(len(matrix)):
        # print(matrix[i])
        # Check the top of the building to set check_list
        if i == 0:
            print('-=Top of the building=-')
            print(matrix[i])
            for j in range(len(matrix[i])):
                # print(matrix[i][j])
                if matrix[i][j] == 0:
                    check_list[j] = False
            # Here we got ready check_list for next levels of the building
            print(check_list)
        
        # Working with next levels
        elif i > 0:
            # Compare with check_list and changing to 0
            for j in range(len(matrix[i])):
                # print('Room', matrix[i][j])
                # print('Checking', check_list[j])
                if check_list[j] == False:
                    matrix[i][j] = 0
                
                # Correcting of check_list
                if matrix[i][j] == 0:
                    check_list[j] = False
            print(matrix[i])
            print(check_list)
        print('===')
    
    # Here we have clean matrix for sum
    print('Matrix for sum')
    counter = 0
    for i in range(len(matrix)):
        print(matrix[i])
        for j in range(len(matrix[i])):
            counter = counter + matrix[i][j]
    
    print('Result is ==>', counter)

    return counter