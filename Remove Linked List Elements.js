var removeElements = function(head, val) {
    // new node before the head so that if same an array of same elements occur it can be dealt with
    let dummy = new ListNode(-1);
    dummy.next = head
    let curr = dummy
    while(curr.next){
        if(curr.next.val == val){
            curr.next = curr.next.next
        }else{
            curr = curr.next
        }
    }
    return dummy.next
};