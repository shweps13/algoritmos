/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let newNums = []
    for (i = 0; i < nums.length; i++) {
        if (i > 0) {
            var localSum = 0
            var localIndex = i
            while (localIndex >= 0) {
                localSum = localSum + nums[localIndex]
                localIndex = localIndex - 1
            }
            newNums.push(localSum)
        } else {
            newNums.push(nums[i])
        }
    }   
    return newNums
};