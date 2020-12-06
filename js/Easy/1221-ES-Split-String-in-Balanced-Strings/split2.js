/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let result = 0;
    let balance = 0;
    
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            balance --
        }
        
        if (s[i] == 'L') {
            balance ++
        }
        
        if (balance == 0) {
            result ++
        }
    }
    return result;
};