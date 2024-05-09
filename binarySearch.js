var binarySearch = (arr,n,x)=>{
    let lo=0;
    let hi = n-1;
    while(lo<=hi){
        let mid = parseInt((lo+hi)/2)
        if(arr[mid] == x)
            return mid
        else if(arr[mid] < x){
            lo = mid + 1
        }else{
            hi = mid-1
        }
    }
    return -1
}


console.log(binarySearch([1,2,3,4,5,6],6,4))
