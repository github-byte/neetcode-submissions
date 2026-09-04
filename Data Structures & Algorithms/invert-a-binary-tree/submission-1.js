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
     * @return {TreeNode}
     */
    invertTree(root) {
        const replaceNodes = (root) => {
            if(!root) return null;
            let temp = null;
            temp = root.left;
            root.left = root.right;
            root.right = temp;            
            replaceNodes(root.left)
            replaceNodes(root.right)
            return root;
        }
        replaceNodes(root);
        return root;
    }
}
