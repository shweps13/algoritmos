/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let result = 0;
    let map = new Map();
    
    for (i = 0; i < s.length; i++) {
        if (map.get(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        }
        
        if (!map.get(s[i])) {
            map.set(s[i], 1)
        }
        
        if (map.get('R') > 0 && map.get('R') == map.get('L')) {
            map.clear()
            result += 1;
        }
    }
    return result;
};