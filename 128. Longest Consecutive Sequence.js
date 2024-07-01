var longestConsecutive = function(nums) {
    let numSet = new Set()
    let maxLen = 0;
    for(let i=0;i<nums.length;i++){
        numSet.add(nums[i])
    }
    for(let firstElem of numSet){
        if(!numSet.has(firstElem-1)){
            let len = 1
            while(numSet.has(firstElem+len)){
                len++
            }
            maxLen = Math.max(maxLen,len)
        }
    }
    return maxLen
};



