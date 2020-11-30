/**
 * @param {number[][]} accounts
 * @return {number}
 */

// loop through each element in array
// get sum - by reducer?
// find and return max

var maximumWealth = function(accounts) {
    let maxEl = 0
    for (i = 0; i < accounts.length; i++) {
        // using reducer here
        let wealth = accounts[i].reduce((a, b) => a + b, 0)
        
        //check if that more than max 
        if (maxEl < wealth) {
            maxEl = wealth
            console.log(wealth)
        }
    }
    return maxEl
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))