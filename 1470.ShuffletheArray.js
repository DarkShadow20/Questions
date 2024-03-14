var shuffle = function(nums, n) {
    let x = [];
    let y= [];
    let finalArr = [];
    for(let i = 0;i<n;i++){
        x.push(nums[i])
        y.push(nums[n+i])
    }
    for(let i =0;i<n;i++){
        finalArr.push(x[i])
        finalArr.push(y[i]);
    }
    return finalArr
};

console.log(shuffle([2,5,1,3,4,7],3))