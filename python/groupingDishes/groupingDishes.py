# looping through the list to put everything in dictionary
# keys ==> will be ingredients, and values => dishes
# remove any ingredients with single dish

def groupingDishes(dishes):
    # Putting everythyng in dict with key ingredients
    dish_dict = dict()
    for i in range(len(dishes)):
        for j in range(len(dishes[i])):
            if j > 0:
                if dishes[i][j] not in dish_dict:
                    dish_dict[dishes[i][j]] = []
                    dish_dict[dishes[i][j]].append(dishes[i][0])

                elif dishes[i][j] in dish_dict:
                    dish_dict[dishes[i][j]].append(dishes[i][0])

    # Filtering the dict with single ingredients
    # Also sorting values
    filtered_dict = dict()
    for i in dish_dict:
        if len(dish_dict[i]) > 1:
            sort_list = dish_dict[i]
            sort_list.sort()
            filtered_dict[i] = sort_list
    # print(filtered_dict)
    

    # Switching everything to the list
    result_list = []
    for i in sorted(filtered_dict):
        new_list = [i]
        new_list.extend(filtered_dict[i])
        result_list.append(new_list)
    print(result_list)
    return result_list

