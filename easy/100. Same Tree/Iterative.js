/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 //Time Complexity：O(n)
 //Space Complexity：O(height)
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null){
        return true
    }
    if(p === null || q === null){
        return false
    }

    let stack = []

    stack.push({'p': p, 'q': q})

    while(stack.length){
        let obj = stack.pop()
        let p = obj.p
        let q = obj.q

        if(p.val !== q.val){
            return false
        }

        if(p.left !== null && q.left !== null){
            stack.push({'p': p.left, 'q': q.left})
        }else if(p.left != null || q.left != null){
            return false
        }

        if(p.right !== null && q.right !== null){
            stack.push({'p': p.right, 'q': q.right})
        }else if(p.rigth != null || q.right != null){
            return false
        }
    }
    return true
};
