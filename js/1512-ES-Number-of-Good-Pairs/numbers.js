/**
 * @param {number[]} nums
 * @return {number}
 */


var numIdenticalPairs = function(nums) {
    let result = 0;
    let pairs = [];
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            
            if (nums[i] == nums[j] && i != j) {
                console.log('i', nums[i], '==', nums[j], 'elements =>', i, j)
                result = result + 1
            }
        }
        
    }
    return result/2
};