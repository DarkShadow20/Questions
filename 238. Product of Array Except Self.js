var productExceptSelf = function(nums) {
    let RP = []
    let LP = []
    let ans = []
    let n = nums.length 
    LP[0] = nums[0]
    RP[n-1] = nums[n-1]
    for(let i= 1;i<n;i++){
        LP[i] = LP[i-1] * nums[i]
    }
    for(let i = n-2;i>=0;i--){
        RP[i] = RP[i+1] * nums[i]
    }
    for(let i = 0;i<n;i++){
        let leftProduct = (i == 0) ? 1 : LP[i-1]
        let rightProduct = (i == n-1) ? 1 : RP[i+1]
        ans[i] = leftProduct * rightProduct
    }
    return ans
};

console.log(productExceptSelf([1,2,3,4]))