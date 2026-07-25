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
        let arr = [];
        let stk = [];
        let node = root;
        while(node || stk.length > 0){
            if(node?.val){
                arr.push(node?.val)
            }
            if(node){
                stk.push(node.right)
                node = node.left
                // console.log(node)
            }
            else{
                node = stk.pop()
                // console.log(node)
            }
        }
        return arr;
    }
}
