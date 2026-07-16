class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let arr = [...heights];
        let total = 0;
        arr.sort((a, b) => a - b)
        for(let i=0;i<arr.length;i++){
            if(arr[i] != heights[i]){
                total++;
            }
        }

        return total
    }
}
