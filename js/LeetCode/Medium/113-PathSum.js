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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let result = [];
    let curr_path = [];
    if (!root) {
        return result;
    }
    
    var dfs = function(node, targetSum, curr_path) {
        // console.log('before =>', curr_path, targetSum)
        if (node) {
            
            // Spread Operator
            curr_path = [...curr_path, node.val]
        }
        console.log('after =>', curr_path, targetSum)

        if (!node.left && !node.right && targetSum === node.val) {
            // console.log('res==>', curr_path, result)
            result.push(curr_path)
            // console.log('azaza==>', result)
            return
        }

        if (node.left) { dfs(node.left, targetSum - node.val, curr_path) }
        if (node.right) { dfs(node.right, targetSum - node.val, curr_path) }
        curr_path.pop();
    };
    
    dfs(root, targetSum, curr_path)
    
    return result;
};

