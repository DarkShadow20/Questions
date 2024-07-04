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

//optimization, you dont need leftproduct
var productExceptSelf = function(nums) {
    let RP = []
    let ans = []
    let n = nums.length 
    let leftProduct = 1
    RP[n-1] = nums[n-1]
    
    for(let i = n-2;i>=0;i--){
        RP[i] = RP[i+1] * nums[i]
    }
    for(let i = 0;i<n;i++){
        let rightProduct = (i == n-1) ? 1 : RP[i+1]
        ans[i] = leftProduct * rightProduct
        leftProduct *= nums[i]
    }
    return ans
};
//optimization, you don't need extra space for rightproduct also
var productExceptSelf3 = function(nums) {
    let ans = []
    let n = nums.length 
    let leftProduct = 1
    ans[n-1] = nums[n-1]
    
    for(let i = n-2;i>=0;i--){
        ans[i] = ans[i+1] * nums[i]
    }
    for(let i = 0;i<n;i++){
        let rightProduct = (i == n-1) ? 1 : ans[i+1]
        ans[i] = leftProduct * rightProduct
        leftProduct *= nums[i]
    }
    return ans
};
console.log(productExceptSelf3([1,2,3,4]))