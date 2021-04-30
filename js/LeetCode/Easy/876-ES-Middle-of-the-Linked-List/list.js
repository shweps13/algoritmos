/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let nodeLen = 1
    let nodeMid = 0
    
    const findNode = (node) => {
        if (node.next) {
            nodeLen++
            findNode(node.next)
        }
    }
    
    findNode(head)
    if (nodeLen % 2 == 1) {
        nodeMid = Math.ceil(nodeLen/2)
    } else {
        nodeMid = nodeLen/2 + 1      
    }
    
    let result
    const returnNode = (node) => {
        if (nodeMid == 1) {
            result = node
        } else {
            nodeMid--
            returnNode(node.next)
        }
    }
    
    returnNode(head)
    return result 
};