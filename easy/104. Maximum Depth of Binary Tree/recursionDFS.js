/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 //time complexity : O(n)
 //space complexity : O(n)
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root===null){
        return 0
    }

    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)

    return Math.max(leftDepth, rightDepth)+1
};
