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

function print(head){
    while(head!=null){
        console.log(head.data)
        head = head.next
    }
}
function mainCall (){
    let arr = [12,5,8,7]
    let head = convertArr2DLL(arr)
    print(head)
    return 0
}

mainCall()