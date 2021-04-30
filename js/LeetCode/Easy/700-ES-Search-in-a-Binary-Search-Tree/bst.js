/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let result = []

    const dfs = (node) => {
        // console.log(node.val , val)
        if (node == null) {
            console.log('end...')
            result = null
            return
        }
        if (node.val == val) {
            console.log('here')
            console.log(node)
            result = node
            return node
        }
        if (val < node.val) {
            dfs(node.left)
        }
        if (val > node.val) {
            dfs(node.right)
        }
    }
    
    if (!root) {
        return result
    } else {
        dfs(root, val)    
    }
    
    return result
};