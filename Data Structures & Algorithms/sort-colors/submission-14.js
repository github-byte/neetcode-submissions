class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    swap(nums, i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    sortColors(nums) {
        let i=0;
        let j=0;
        let k=nums.length -1;
        for(let m=0; m<nums.length ;m++){
            if(nums[j] == 0){
                this.swap(nums, i, j)
                i++;
                j++;
            }
            else if(nums[j] == 2){
                this.swap(nums, j, k)
                k--;
            }
            else j++;
        }
        return nums;
    }
}
