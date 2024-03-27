var topKFrequent = function(nums, k) {
    let map = new Map();
    let resultArr = []
    let max = 0
    let counter = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if (map.has(nums[i])) {
            map.set(nums[i] ,map.get(nums[i])+1)
        }else {
            map.set(nums[i],1)    
        } 
    }
    let sortedArr = Array.from(map).sort((a,b)=>b[1]-a[1])
    for(let i = 0; i < k; i++) {
        resultArr.push(sortedArr[i][0]);
    }
    return resultArr
};


console.log(topKFrequent([1,1,1,2,2,3],2))
console.log(topKFrequent([1],1))