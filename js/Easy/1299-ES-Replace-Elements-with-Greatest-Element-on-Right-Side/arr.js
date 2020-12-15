/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = [];
    let len = arr.length - 1
    let counter = 1
    
    while (len > 0) {
        let maxEl = 0;
        for (i = counter; i < arr.length; i++) {
            if (maxEl < arr[i]) {
                maxEl = arr[i]
            }
        }
        result.push(maxEl)    
        len--
        counter++
    }
    result.push(-1)
    return result
    
};