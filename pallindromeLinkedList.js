var reverseLinkedList = function(head){
    if(head == null || head.next == null){
        return head
    }
    let newHead = reverseLinkedList(head.next)
    let front = head.next
    front.next = head
    head.next = null
    return newHead;
}


var isPalindrome = function(head) {
    if(head == null || head.next == null){
        return true
    }
    let fast = head
    let slow = head
    while(fast.next != null && fast.next.next!=null){
        slow = slow.next
        fast = fast.next.next
    }
    let newHead = reverseLinkedList(slow.next)
    let first = head
    let second = newHead
    while(second!=null){
        if(first.data != second.data){
            reverseLinkedList(newHead)
            return false
        }
        first = first.next
        second = second.next
    }
    reverseLinkedList(newHead)
    return true;
};


var isPalindrome = function(head) {
    let straight = '';
    let reversed = '';
    while (head) {
        straight += head.val;
        reversed = head.val + reversed;
        head = head.next;
    };
    return straight === reversed;
};