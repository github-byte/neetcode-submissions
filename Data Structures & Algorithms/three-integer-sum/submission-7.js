class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b)
        let ans = []
        for(let i=0;i<nums.length;i++){
            let left = i+1;
            let right = nums.length - 1;
            if(nums[i] == nums[i-1]) continue
            while(left<right){
                if(nums[i]+nums[left]+nums[right]<0){
                    while(nums[left] == nums[left+1]) left++;
                    left++;
                }
                else if(nums[i]+nums[left]+nums[right]>0){
                    while(nums[right] == nums[right-1]) right--;
                    right--;
                }
                else{
                   ans.push([nums[i],nums[left],nums[right]])
                   while(nums[left] == nums[left+1]) left++;
                   while(nums[right] == nums[right-1]) right--;
                   left++;
                   right--;
                }
            }
        }
        return ans
    }
}
