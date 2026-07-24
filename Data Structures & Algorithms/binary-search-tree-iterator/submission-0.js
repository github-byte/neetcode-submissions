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
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    iterate(root, arr){
        if(!root) return null;
        this.iterate(root.left, arr)
        if(root.val){
            arr.push(root.val)
        }
        this.iterate(root.right, arr)
    }
    constructor(root) {
        this.bst = root;
        this.count = 0
        this.arr = []
        this.iterate(root, this.arr)
    }

    /**
     * @return {number}
     */
    next() {
        let ans = this.arr[this.count]
        this.count++;
        return ans
    }
    /**
     * @return {boolean}
     */
    hasNext() {
        return Boolean(this.arr[this.count])
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
