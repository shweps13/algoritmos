var reverseList = function(head) {
	// base case
    if (head == null || head.next == null){
        console.log('here', head)
        return head;
    }
	
    // go all the way to the end
    let reversedListHead = reverseList(head.next)
    
    // add reverse myself
    head.next.next = head;
    head.next = null;

    // go up
    return reversedListHead
};