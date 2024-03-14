var numIdenticalPairs = function(nums) {
    let counter = 0;
    let size= nums.length;
    for(let i=0;i<size-1;i++){
        for(let j = i+1; j<size; j++)
            if(nums[i] === nums[j]){
                counter++;
            }
    }
    return counter;
}
   
    


console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))
console.log(numIdenticalPairs([1,2,3]))
