//O(NLOGN)
var sortedSquares = function(nums) {
    let n = nums.length
    let res = []
    for(let i = 0;i<n;i++){
        res[i] = nums[i] * nums[i]
    }
    res.sort((a,b)=>a-b)
    return res
};

//better approach

//O(N)
var sortedSquares = function(nums) {
    let n = nums.length
    let res = []
    let index = n-1
    let lastIndex = n-1;
    let firstIndex = 0;
    while(firstIndex<=lastIndex){
        let sqOfLeft = nums[firstIndex] * nums[firstIndex]
        let sqOfRight = nums[lastIndex] * nums[lastIndex]
        if(sqOfRight > sqOfLeft){
            res[index] = sqOfRight;
            lastIndex--
        }else{
            res[index] = sqOfLeft
            firstIndex++
        }
        index--
    }
    return res 
};