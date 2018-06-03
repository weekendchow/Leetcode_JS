/**
 * @param {number[]} prices
 * @return {number}
 */
 //Time complexity : O(n)
 //Space complexity: O(1)
var maxProfit = function(prices) {
    let res = 0
    for(let i = 1; i<prices.length; i++){
        if(prices[i]>prices[i-1]){
            res += prices[i]-prices[i-1]
        }
    }
    return res
};
