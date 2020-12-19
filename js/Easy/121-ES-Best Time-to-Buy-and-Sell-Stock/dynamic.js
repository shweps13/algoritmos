/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buying = prices[0];
    let profit = 0;
    
    for (i = 0; i < prices.length; i++) {
        if (prices[i] < buying) {
            buying = prices[i]
        } else if (prices[i] - buying > profit) {
            profit = prices[i] - buying
        }
    }
    
    return profit
    
};