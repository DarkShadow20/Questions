var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    for(let i=0;i<n;i++){
        fast = fast.next
    }
    if(fast == null){
        return head.next
    }
    while(fast && fast.next!= null){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};