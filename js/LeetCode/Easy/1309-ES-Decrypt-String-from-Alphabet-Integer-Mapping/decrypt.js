/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let map = new Map();
    
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    for (j = alp.length-1; j >= 0 ; j--) {
        map.set(j+1, alp[j])
    }
    
    let result = "";
        
    for (i = s.length-1; i >= 0 ; i--) {
        // console.log(s[i])
        if (s[i] == '#') {
            let num = s[i-2] + s[i-1]
            // console.log('num', num, map.get(Math.floor(num)) )
            result = map.get(Math.floor(num)) + result
            i = i-2
        } else {
            // console.log(s[i])
            // console.log(map.get(Math.floor(s[i])))
            result = map.get(Math.floor(s[i])) + result
        }
    }
    
    return result
};