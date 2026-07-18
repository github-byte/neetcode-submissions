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
     * @return {number}
     */
    maxDepth(root) {
        let max = 0;
        let depth = 0
        // console.log(root)
        if(!root) return 0;
        else if(!root.left && !root.right) return 1;
        const travel = (root, height) => {
            if(!root) {
                depth = Math.max(depth, height)
                // console.log(depth, max, root)
                height = 0;
                return null
            }
            root.left = travel(root.left, height + 1)
            // console.log(max, depth, 'root', root.val)
            root.right = travel(root.right, height + 1)
        }
        travel(root, max)
        return depth;
    }
}
