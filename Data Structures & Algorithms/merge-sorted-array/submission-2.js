class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i=m-1;
        let j=nums2.length-1;
        let fill = nums1.length-1;
        while(j>=0){
            if(nums1[i] > nums2[j]){
                nums1[fill] = nums1[i];
                fill--;
                i--;
            }
            else{
                nums1[fill] = nums2[j];
                fill--;
                j--;
            }
        }
    }
}
