class Node {
    constructor(data,next,back){
        this.data = data
        this.prev = back
        this.next = next
    }
}


function convertArr2DLL(arr){
    let head = new Node(arr[0]);
    let prev = head
    for(let i=1;i<arr.length;i++){
        let temp = new Node(arr[i],null,prev);
        prev.next = temp;
        prev = temp
    }
    return head
}
function deleteHead(head){
    if(head == null || head.next == null){
        return null
    }
    let prev = head
    head = head.next

    head.prev = null
    prev.next = null
    return head
}
function deleteTail(head){
    if(head == null || head.next == null){
        return null
    }
    let tail = head
    while(tail.next !=null){
        tail = tail.next
    }
    let newTail = tail.prev
    newTail.next = null
    tail.prev = null
    return head
}
function removeKthElement (head , k){
    if(head == null){
        return null
    }
    let cnt = 0;
    let kNode = head
    while(kNode!=null){
        cnt++
        if(cnt == k){
            break;
        }
        kNode = kNode.next
    }
    let prev = kNode.prev
    let front = kNode.next
    
    if(prev == null && front == null){
        return null
    }else if(prev == null){
        return deleteHead(head)
    }else if(front == null){
        return deleteTail(head)
    }
    prev.next = front
    front.back = prev
    kNode.next = null
    kNode.prev = null
    return head
}
function deleteNode (temp){         // temp node will not be head, if it is head it will make it more complicated
    let prev = temp.prev
    let front = temp.next

    if(front == null){
        prev.next = null
        temp.prev = null
        return;
    }
    prev.next = front
    front.prev = prev

    temp.next = temp.prev = null
}
function print(head){
    while(head!=null){
        console.log(head.data)
        head = head.next
    }
}
function mainCall (){
    let arr = [12,5,8,7]
    let head = convertArr2DLL(arr)

    //head = deleteHead(head)  for deleting head
    //head = deleteTail(head)    //for deleting tail
    //head = removeKthElement(head,4)
    deleteNode(head.next)
    print(head)
    return 0
}

mainCall()