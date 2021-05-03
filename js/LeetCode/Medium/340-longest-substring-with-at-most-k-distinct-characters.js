/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var lengthOfLongestSubstringKDistinct = function(s, k) {
    let map = new Map();
    let start = 0;
    let stringSum = 0;
    let maxStr = 0;
    
    for (end = 0; end < s.length; end++) {
        if (!map.has(s[end])) {
            map.set(s[end], 1)    
        } else {
            map.set(s[end], (map.get(s[end])+1))    
        }
        stringSum = stringSum + 1;
        
        while (map.size > k) {
            let symbol = map.get(s[start]);
            if (symbol > 1) {
                map.set(s[start], (symbol-1));
            } else if (symbol === 1) {
                map.delete(s[start]);
            }
            stringSum = stringSum - 1;
            start = start + 1;
        }
        maxStr = Math.max(maxStr, stringSum)
    }
    
    return maxStr;
    
};