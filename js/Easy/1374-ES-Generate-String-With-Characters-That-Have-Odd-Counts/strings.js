/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if (n == 1) {
        return "x"
    }
    if (n % 2 > 0) {
        console.log('azaza', n)
        let result = ("x".repeat(n-2)) + "y" + "z"
        return result
    } else {
        console.log('pewpew', n)
        let result = ("x".repeat(n-1)) + "y"
        return result
    }
};