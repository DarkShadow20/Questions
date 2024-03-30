//have to find index in the linked list

var detectCycle = function(head) {
    let slow = head
    let fast = head
    let entry = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            while(slow !=entry){
            slow = slow.next
            entry = entry.next
            }
            return entry
        }
    }
    return null
};