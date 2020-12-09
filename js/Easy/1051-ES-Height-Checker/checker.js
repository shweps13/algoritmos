/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function(heights) {
    let sortedArr = [...heights].sort((a, b) => a - b);
    result = 0
    
    for (i = 0; i < heights.length; i++) {
        if (sortedArr[i] !== heights[i]) {
           result++ 
        }
    }
    return result
};