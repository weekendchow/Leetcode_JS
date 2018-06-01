/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 //Time Complexity：O(n)
 //Space Complexity：O(n)
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root===null) return 0

    let stack = []
    let maxDepth = 1

    stack.push({'node': root, 'depth': maxDepth})

    while(stack.length){
        let obj = stack.pop()
        let node = obj.node
        let depth = obj.depth

        if(node.left != null){
            stack.push({'node': node.left, 'depth': depth + 1})
        }
        if(node.right != null){
            stack.push({'node': node.right, 'depth': depth + 1})
        }

        maxDepth = Math.max(maxDepth, depth)
    }

    return maxDepth
};
