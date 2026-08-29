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
    let isBalance = true
    const balance = (root) => {
        if(!root) {
            return true;
        }
        if(isBalance){
            let right = height(root.right);
            let left = height(root.left);
            isBalance = Math.abs(right - left) <= 1
        }
        else return false
        balance(root.left)
        balance(root.right)
        return isBalance;
    }
    return balance(root)
    }
}
