/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        const preOrderArr = [];
        const findTravel = (root) => {
            if(!root) return null;
            preOrderArr.push(root.val)
            root.left = findTravel(root.left);
            root.right = findTravel(root.right);
        }
        findTravel(root)
        return preOrderArr;
    }
}
