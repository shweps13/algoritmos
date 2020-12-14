/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let arrPoint
    if (s.length % 2 > 0) {
        arrPoint = Math.floor(s.length/2)
    } else {
        arrPoint = Math.ceil(s.length/2)
    }
    
    let p1 = 0
    let p2 = s.length - 1
    let temp
    
    while (p1 !== arrPoint) {
        // console.log(p1, "=", s[p1], p2, "=", s[p2])
        temp = s[p1]
        s[p1] = s[p2]
        s[p2] = temp
        p1++
        p2--
    }
};