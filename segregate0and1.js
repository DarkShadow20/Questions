var segregate = function(arr,n){
    let left = 0
    let right = n-1
    while(left < right){
        while(arr[left] == 0 && left < right ){
            left++
        }
        while(arr[right] == 1 && left < right){
            right--
        }
        if(left < right){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
    }
    return arr
}


console.log(segregate([0,0,0,1,0,1,1],7))
