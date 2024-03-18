var numberGame = function(nums) {
    let arr = []
    
    while(nums.length){
        nums.sort((a,b)=>a-b)
        let alice = nums.shift()
        let bob = nums.shift()
        arr.push(bob)
        arr.push(alice)
    }
    return arr;
};


console.log(numberGame([5,4,2,3]))