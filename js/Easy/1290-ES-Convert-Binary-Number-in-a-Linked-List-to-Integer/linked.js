/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let N = "";
    console.log(head.val)
    
    let getData = (linkedList) => {
        if (linkedList.val || linkedList.val == 0) {
            N += linkedList.val.toString();
        }
        
        if (linkedList.next) {
            getData(linkedList.next)
        }
    }
    
    getData(head)
    // console.log(typeof parseInt(N, 2), parseInt(N, 2))
    return parseInt(N, 2)
};