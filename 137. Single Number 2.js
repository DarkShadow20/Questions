var singleNumber = function(nums) {
    const MAX_BITS = 32
    let countOfSetBits = new Array(MAX_BITS)
    for(let no = 0; no < nums.length; no++){
        console.log(no)
        for(let bitPos = 0; bitPos < MAX_BITS; bitPos++){
            let mask = (1<<bitPos)
            console.log(bitPos)
            if( (no & (1<<bitPos))!=0  ){
                countOfSetBits[bitPos]++
            }
        }
        let singleNo = 0
        for(let i = 0;i < MAX_BITS; i++){
            if(countOfSetBits[i]%3 !=0){
                singleNo |= (1<<i)
            }
        }
        return singleNo
    }
};

console.log(singleNumber([2,2,3,2]))