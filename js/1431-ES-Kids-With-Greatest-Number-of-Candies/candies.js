/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// find max candies in array
// create an empty array for boolean things
// loop through the main array and chack - if there possible to reach max candies with extra

var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    console.log('max candies =>', maxCandies);
    
    let result = []
    
    for (i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    
    return result
};