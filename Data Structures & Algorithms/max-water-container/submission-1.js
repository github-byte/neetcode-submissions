class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //find the next smaller elem
        let area = 0;
        for(let i=0;i<heights.length;i++){
            for(let j=i+1;j<heights.length;j++){
                if(heights[j]<=heights[i]){
                    area = Math.max(area, heights[j]*(j-i))
                }
                else area = Math.max(area, heights[i]*(j-i))
            }
        }
        return area
    }
}
