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
 * @return {number}
 */
 var sumNumbers = function(root) {
    let result = 0;
    let path = "";
    
    var dfs = function(node, path) {
        if (node) {
            path = path + node.val;
        }

        // console.log('=>', path, '<-', node.val)

        if (!node.left && !node.right) {
            // console.log('=||==>', result, "++", path)
            result = result + parseInt(path);
            // console.log('===>', result)
        }

        if (node.left) { dfs(node.left, path, result) }
        if (node.right) { dfs(node.right, path, result) }

    }
    
    dfs(root, path, result)
    
    return result;
};
