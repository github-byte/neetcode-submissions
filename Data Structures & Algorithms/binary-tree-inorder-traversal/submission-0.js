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
    inorderTraversal(root) {
        let arr = []
        const travel = (root) => {
            if(!root) return null;
            root.left = travel(root.left)
            arr.push(root.val)
            root.right = travel(root.right)
        }
        travel(root)
        return arr;
    }
}
