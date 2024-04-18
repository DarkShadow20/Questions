var divisorSubstrings = function(num, k) {
    let left = 0;
    let right = k-1;
    let count = 0;
    let tempStr = num.toString();
    while(right < tempStr.length){
        let substring = ""
        
        for(let i=left;i<=right;i++){
            substring+=tempStr[i]
        }
        left++;
        right++;
        if(num%parseInt(substring) == 0){
            count++
        }
    }
    return count
};


console.log(divisorSubstrings(2402,1))