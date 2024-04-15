var subarraysDivByK = function(nums, k) {
    let size = nums.length
    let arr = Array(size).fill(0)
    arr[0] = nums[0]
    for(let i =1;i<size;i++){
        arr[i] = arr[i-1] + nums[i]
    }
    for(let i=0;i<size;i++){
        arr[i] = (arr[i] + k) % k
        if(arr[i] < 0){
            arr[i] = (arr[i] + k) % k
        }
    }
    let freq = Array(k).fill(0)
    let ans = 0
    for(let i=0;i<size;i++){
        ans += freq[arr[i]]
        freq[arr[i]]++
        if(arr[i] == 0)
            ans++
    } 
    return ans
};


console.log(subarraysDivByK([4,5,0,-2,-3,1],5))