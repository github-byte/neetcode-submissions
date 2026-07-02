class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    swap(nums, i, j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    sortColors(nums) {
        // [1,0,1,2]
        let i=0;
        let j=0;
        let k=nums.length - 1
        while(j<=k){
            if(nums[j] == 0){
                this.swap(nums, i, j)
                i++;
                j++
            }
            else if(nums[j] == 2){
                this.swap(nums, j, k)
                k--;
            }
            else j++
        }
    }
}
