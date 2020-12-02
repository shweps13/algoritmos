/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */


var calculateTime = function(keyboard, word) {
    // creating and filling the map
    let map = new Map();
    for (i = 0; i < keyboard.length; i++) {
        map.set(keyboard[i], i)
    }
    // console.log(map)
    
    // finding the way between keys
    let result = 0;
    for (j = 0; j < word.length; j++) {
        if (j == 0) {
            result += map.get(word[j])   
        } else {
            let prev = map.get(word[j-1])
            let current = map.get(word[j])
            // console.log('from', prev, 'to ==>', current)
            if (prev > current) {
                result += (prev - current)
            } else if (prev < current) {
                result += (current - prev)
            }
            
        }
    }
    return result
};