class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        // if(k == nums.length) return nums;
        nums.sort((a, b) => a - b)
        let minDiff = Number.MAX_SAFE_INTEGER
        for(let i=0;i< nums.length;i++){
            let diff = nums[i+k-1] - nums[i]
            if(diff<minDiff){
                minDiff = diff;
            }
        }
        return minDiff;
    }
}
