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
    postorderTraversal(root) {
        const travArr = []
        const postTravel = (root) => {
            if(!root) return null
            root.left = postTravel(root.left)
            root.right = postTravel(root.right)
            travArr.push(root.val)
        }
        postTravel(root)
        return travArr
    }
}
