class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //least amt buy 
        //sell at highest
        //find 
        let maxSum = 0;
        for(let i=1;i<prices.length;i++){
            if(prices[i] > prices[i-1]){
                maxSum += prices[i] - prices[i-1]
            }
        }
        return maxSum
    }
}
