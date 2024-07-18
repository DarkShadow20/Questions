var singleNumber = function(nums) {
    // firstly xor all the elements of the array
    let xorArray = 0
    let firstElement = 0
    for(let no of nums){
        xorArray ^=no
    }
    // create the magic number
    let magicNumber  = xorArray & (-xorArray)
    for(let no of nums){
        if( (no & magicNumber) !=0){
            // find the first element in the array
            firstElement ^=no
        }
    }
    return [firstElement, firstElement^xorArray]
};

console.log(singleNumber([1,2,1,3,2,5]))