/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = [];
    
    const dfs = (node) => {
        if (!node) {
           return
        }
    
        if (node.val >= 0) {
            result.push(node.val)
        }
        
        if (node.children) {
            node.children.forEach((children) => {
                dfs(children)
            })
        }

    }
    
    dfs(root)
    
    return result
};