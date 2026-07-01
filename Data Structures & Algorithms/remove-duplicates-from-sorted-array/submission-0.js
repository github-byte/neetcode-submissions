class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let writer = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i] != nums[writer]){
                writer++;
                nums[writer] = nums[i]
            }
        }
        // console.log(nums.slice(0, writer+1))
        return writer + 1;
    }
}
