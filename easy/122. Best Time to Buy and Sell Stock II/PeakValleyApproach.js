/**
 * @param {number[]} prices
 * @return {number}
 */
 //Time complexity : O(n)
 //Space complexity : O(1)
var maxProfit = function(prices) {
   let res = 0
   let valley = prices[0]

   for(let i = 1; i < prices.length; i++){
       if(prices[i] > prices[i-1]){
           if(valley > prices[i-1]){
               res += prices[i]-valley
               valley = prices[i+1]
           }else{
               res += prices[i] - prices[i-1]
               valley = prices[i-1]
           }
       }
       valley = Math.min(valley, prices[i])
   }
    return res
};
