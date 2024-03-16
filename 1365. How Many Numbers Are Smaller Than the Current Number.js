var smallerNumbersThanCurrent = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        let count = 0;
        for(let j=0;j<nums.length;j++){
            if(nums[j]< nums[i] && j!=i){
                count++;
            }
        }
        arr.push(count)
    }
    return arr;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))
console.log(smallerNumbersThanCurrent([7,7,7,7]))

