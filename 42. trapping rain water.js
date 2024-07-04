var trap = function(height) {
    let n = height.length
    let leftMax = []
    let rightMax = []
    let ans = 0
    leftMax[0] = height[0]
    rightMax[n-1] = height[n-1] 
    for(let i=1;i<n;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i])
    }
    for(let i = n-2;i>=0;i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i])
    }
    for(let i = 0;i<n;i++){
        ans += Math.min(leftMax[i],rightMax[i]) - height[i]
    }
    return ans
};

//optimization not leftmax
var trap1 = function(height) {
    let n = height.length
    let leftMax = 0
    let rightMax = []
    let ans = 0
    rightMax[n-1] = height[n-1] 

    for(let i = n-2;i>=0;i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i])
    }
    for(let i = 0;i<n;i++){
        leftMax = Math.max(leftMax,height[i])
        ans += Math.min(leftMax,rightMax[i]) - height[i]
    }
    return ans
};

console.log(trap1([0,1,0,2,1,0,1,3,2,1,2,1]))