//only positive

var maxSizeSubArrOfK = function(arr,k){
    let left =0;
    let right = 0;
    let sum = 0;
    let maxLen = 0;
    let sizeArr = arr.length
    while(right < sizeArr){
        while(left<=right && sum>k){
            sum-=arr[left]
            left++
        }
        if(sum == k){
            maxLen = Math.max(maxLen,right-left+1)
        }
        right++;
        if(right < sizeArr){
            sum+=arr[right]
        }
    }
    return maxLen
}


console.log(maxSizeSubArrOfK([1,2,3,1,1,1,1,4,2,3],6))