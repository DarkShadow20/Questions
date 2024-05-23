var sortedSquares = function(nums) {
    let n = nums.length
    let res = []
    for(let i = 0;i<n;i++){
        res[i] = nums[i] * nums[i]
    }
    res.sort((a,b)=>a-b)
    return res
};