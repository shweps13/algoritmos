/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = "";
    let word = {};
    
    for (i = 0; i < indices.length; i++) {
        // console.log('word', word)
        word[indices[i]] = s[i]
    }
    
    for (j = 0; j < indices.length; j++) {
        result += word[j]    
    }
    
    return result
};