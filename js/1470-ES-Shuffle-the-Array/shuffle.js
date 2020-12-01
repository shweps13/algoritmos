/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// need to find slicing point for the array
// push to the new array shuffled elements

var shuffle = function(nums, n) {
    // n -> position of the y1 element
    let result = []
    
    for (i = 0; i < n; i++) {
        console.log('num', i, 'element', nums[i])
        result.push(nums[i])
        result.push(nums[i+n])
    }
    return result
};