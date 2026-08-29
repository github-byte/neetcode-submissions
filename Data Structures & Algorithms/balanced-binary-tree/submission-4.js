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
     * @return {boolean}
     */
    isBalanced(root) {
        const height = (root) => {
            if(!root) return 0;
            return Math.max(height(root.left),height(root.right)) + 1
        }
        if(!root) {
            return true;
        }
        let right = height(root.right);
        let left = height(root.left);
        if(Math.abs(right - left) > 1){
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
}
