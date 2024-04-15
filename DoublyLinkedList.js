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
function addBeforeHead (head,val){
    let newHead = new Node(val,head,null)
    head.prev = newHead
    return newHead
}
function addAfterHead (head,val){
    if(head == null){
        return new Node(val,null,null)
    }
    else if(head.next == null){
        let newNode = new Node(val,null,head)
        head.next = newNode
        return head
    }
    let front = head.next

    let newNode = new Node(val,front,head)
    head.next = newNode
    front.prev = newNode
    return head
}
function addBeforeTail(head,val){
    if(head.next == null){
        return addBeforeHead(head,val)
    }
    let tail = head
    while(tail.next !=null ){
        tail = tail.next
    }

    let prev = tail.prev
    let newNode = new Node(val,tail,prev)
    prev.next = newNode
    tail.prev = newNode
    return head

}
function addAfterTail(head,val){
    if(head == null || head.next == null){
        return addAfterHead(head,val)
    }
    let tail = head
    while(tail.next !=null){
        tail = tail.next
    }
    let newNode = new Node(val,null,tail)
    tail.next = newNode
    return head
}
function addBeforeKNode(head,k,val){
     if( k == 1){
        return addBeforeHead(head,val)
     }
     let temp = head
     let cnt = 0
     while(temp != null){
        cnt++ 
        if(cnt == k)
            break
        temp = temp.next
     }
    let prev = temp.prev
    let newNode = new Node(val,temp,prev);
    prev.next = newNode
    temp.back = newNode
    return head
}
function addAfterKNode(head,k,val){
    if(k==1){
        return addAfterHead(head,val)
    }
    let temp = head
    let cnt = 0
    while(temp!=null){
        cnt++
        if(cnt == k)
            break
        temp= temp.next
    }
    if(temp.next == null){
        return addAfterTail(head,val)
    }
    let front = temp.next
    let newNode = new Node(val,front,temp);
    front.prev = newNode
    temp.next = newNode
    return head
}
function addBeforeNode(node,val){
    let prev = node.prev
    let newNode = new Node(val,node,prev)
    prev.next = newNode
    node.prev = newNode
}
function addAfterNode(node,val){
    if(node.next == null){
        return addAfterTail(node,val)
    }
    let front = node.next
    let newNode = new Node(val,front,node)
    front.prev = newNode
    node.next = newNode
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
    //deleteNode(head.next)        // never delete head will be asked, increase the complexity
    //head = addBeforeHead(head,10)
    //head = addBeforeTail(head,10)
    //head = addBeforeKNode(head,3,10)
    //addBeforeNode(head.next.next,100)
    //head = addAfterHead(head,10)
    //head = addAfterTail(head,10)
    //head = addAfterKNode(head,4,10)    
    addAfterNode(head.next.next.next,10)     
    print(head)
    return 0
}

mainCall()