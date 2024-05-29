var removeDuplicates = function(nums) {
    let traversalPtr = 0
    let k = 0
    let prev = Math.min
    for(;traversalPtr<nums.length;traversalPtr++){
        let currentEle = nums[traversalPtr]
        if(prev!=currentEle){
            nums[k] = currentEle
            k++
            prev = currentEle
        }
    }
    return k
};


console.log(removeDuplicates([1,1,2]))