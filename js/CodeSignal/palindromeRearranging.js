function palindromeRearranging(inputString) {
    let map = new Map();
    
    for (i = 0; i< inputString.length; i++) {
        if (map.has(inputString[i])) {
            map.set(inputString[i], (map.get(inputString[i]) + 1))
        } else {
            map.set(inputString[i], 1)
        }
    }
    
    let counter = 0;
    for (let symbol of map.values()) {
        // console.log(symbol, '->', symbol % 2)
        if (symbol % 2 > 0) {
            counter = counter + 1;
        }
    }
    
    if (counter > 1) {
        return false;
    } else {
        return true;
    }
    
}
