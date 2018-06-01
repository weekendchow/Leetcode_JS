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

    let queue = []
    let count = 0

    queue.push(root)

    while(queue.length){
        for(let i = queue.length; i > 0 ; i--){
            let obj = queue.shift()
            if(obj.left !== null){
                queue.push(obj.left)
            }
            if(obj.right !== null){
                queue.push(obj.right)
            }
        }
        count ++
    }

    return count
};
