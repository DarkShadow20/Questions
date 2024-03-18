var leftRightDifference = function(nums) {
    let operatedArr = [];
    let leftSumArr = [];
    let rightSumArr = [];

    //rightSum
    for(let i = 0 ; i < nums.length ; i++){
        let sum = 0;
        for(let j=i+1;j<nums.length;j++){
            sum = sum + nums[j];
        }
        rightSumArr[i] = sum;
        if(i == nums.length){
            rightSumArr[i]=0;
        } 
    }
    //leftSum
    leftSumArr[0] = 0
    for(let i = nums.length-1 ; i>=1 ; i--){
        let sum = 0;
        for(let j = i-1 ; j>=0 ; j--){
            sum = sum + nums[j];
        }
        leftSumArr[i] = sum
    }
    for(let i = 0;i<nums.length;i++){
        operatedArr[i] = Math.abs(leftSumArr[i]-rightSumArr[i])
    }
    return operatedArr
};


console.log(leftRightDifference([10,4,8,3]))