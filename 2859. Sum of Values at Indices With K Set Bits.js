var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        let indexBits = i.toString(2)
        let counter = 0;
        for(let j=0;j<indexBits.length;j++){
            if(indexBits[j] == 1){
                counter++;
            }
        }
        if(counter == k){
            sum = sum + nums[i]
        }
    }  
    return sum
};

console.log(sumIndicesWithKSetBits([5,10,1,5,2],1))