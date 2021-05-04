/**
 * @param {number[]} tree
 * @return {number}
 */
 var totalFruit = function(tree) {
    let start = 0;
    let map = new Map();
    let maxLen = 0;
    
    for (end = 0; end < tree.length; end++) {
        if (!map.has(tree[end])){
            map.set(tree[end], 1);
        } else {
            map.set(tree[end], (map.get(tree[end]) + 1));
        }
        
        while (map.size > 2) {
            if (map.get(tree[start]) > 1) {
                map.set(tree[start], (map.get(tree[start]) - 1));
            } else {
                map.delete(tree[start])
            }
            start = start + 1;
        }
        maxLen = Math.max(maxLen, (end-start + 1))
    }
    return maxLen;
};