//iterative solution

var reverseList = function(head) {
    let temp = head
    let prev = null
    while(temp!=null){
        let front = temp.next
        temp.next = prev
        prev = temp
        temp = front
    }
    return prev
};


//recursive solution

var reverseList = function(head) {
    if(head == null || head.next == null)
        return head
    let newHead = reverseList(head.next)
    let front = head.next
    front.next = head 
    head.next = null
    return newHead
};