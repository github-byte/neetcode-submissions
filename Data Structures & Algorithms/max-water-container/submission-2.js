class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //find the next smaller elem
        let left = 0;
        let right = heights.length - 1;
        let area = 0
        while(left <= right){
            if(heights[left] < heights[right]){
                area = Math.max(area, heights[left]*(right - left))
                left++;
            }
            else{
                area = Math.max(area, heights[right]*(right - left))
                right--;
            }
        }
        return area
    }
}
