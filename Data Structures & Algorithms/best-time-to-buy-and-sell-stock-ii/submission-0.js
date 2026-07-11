class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //least amt buy 
        //sell at highest
        //find 
        const peaks = [0];
        let maxSum = 0;
        for(let i=1;i<prices.length;i++){
            peaks[i] = prices[i] - prices[i-1]
        }
        for(let j=0;j<peaks.length;j++){
            if(maxSum + peaks[j] > maxSum){
                maxSum += peaks[j]
            }
        }
        return maxSum
    }
}
