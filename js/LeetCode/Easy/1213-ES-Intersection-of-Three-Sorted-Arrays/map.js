/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let result = [];
    let map = new Map();
    
    for (i = 0; i < arr1.length; i++) {
        if (map.get(arr1[i]) > 0) {
            map.set(arr1[i], (map.get(arr1[i]) + 1))
        } else {
            map.set(arr1[i], 1)        
        }
        
        if (map.get(arr2[i]) > 0) {
            map.set(arr2[i], (map.get(arr2[i]) + 1))
        } else {
            map.set(arr2[i], 1)        
        }
        
        if (map.get(arr3[i]) > 0) {
            map.set(arr3[i], (map.get(arr3[i]) + 1))
        } else {
            map.set(arr3[i], 1)        
        }
    }
    
    map.forEach((value, key) => {
        if (value >= 3) {
            result.push(key)
        }
    })
    
    return result
};