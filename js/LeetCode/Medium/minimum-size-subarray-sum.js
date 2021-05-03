/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let arrLen = 0;
    let localSum = 0;
    let start = 0;
    
    for (let end = 0; end <= nums.length; end++){
        localSum = localSum + nums[end] 
        arrLen = arrLen + 1;
        while (localSum >= target) {
            if (minLen > arrLen) {
                minLen = arrLen
            }
            localSum = localSum - nums[start];
            start = start + 1;
            arrLen = arrLen - 1;
        }    
    }
    
    if (minLen === Infinity) {
        return 0;
    }
    return minLen;
};