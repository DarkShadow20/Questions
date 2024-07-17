var singleNumber = function(nums) {
    let countOfSetBits = new Array(32).fill(0)
    let singleNo = 0
    for(let no of nums){
        for(let bitPos = 0; bitPos < 32; bitPos++){
            let mask = (1<<bitPos)
            if( (no & mask)){
                countOfSetBits[bitPos]++
            }
        }
    }
    for(let i = 0;i < 32; i++){
            if(countOfSetBits[i]%3 !=0){
                singleNo |= (1<<i)
            }
        }
    return singleNo
};

console.log(singleNumber([30000,500,100,30000,100,30000,100]))
