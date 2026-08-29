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
     * @return {number[][]}
     */
    levelOrder(root) {
        let arr = []
        const travel = (root, len) => {
            if(!root) {
                len = len - 1;
                return null;
            }
            if(!arr?.[len]){
                arr[len] = [root.val]
            }
            else{
                arr[len].push(root.val)
            }
            travel(root.left, len + 1)
            travel(root.right, len + 1)
            return root;
        }
        travel(root, 0)
        return arr;
    }
}
