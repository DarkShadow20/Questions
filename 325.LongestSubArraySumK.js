// Find the longest subarray with sum = k

var longSubSumK = (nums,k) =>{
    let sum = 0
    let map = new Map();
    map.set(0,-1)
    let maxLen = 0
    for(let i=0;i<nums.length;i++){
        // if(i==0){
        //     prefixSum[i] = nums[i]
        // }else{
        //     prefixSum[i] = nums[i] + prefixSum[i-1]
        // }
        sum+=nums[i]
        let valueNeedToSubtract = sum - k;
        if(map.has(valueNeedToSubtract))
            maxLen = Math.max(i-map.get(valueNeedToSubtract),maxLen)
        if(!map.has(sum))
            map.set(sum,i)
    }
    return maxLen
}

console.log(longSubSumK([1,-1,5,2,-1],6))