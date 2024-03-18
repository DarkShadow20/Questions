var decode = function(encoded, first) {
    let orignalArr = []
    orignalArr.push(first)
    for(let i=0;i<encoded.length;i++)
    {
        orignalArr[i+1] = encoded[i] ^ orignalArr[i];
    }
    return orignalArr
};


console.log(decode([1,2,3],1))
console.log(decode([6,2,7,3],4))