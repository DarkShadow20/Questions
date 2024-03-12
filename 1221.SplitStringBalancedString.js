var balancedStringSplit = function(s) {
    let balancedCount = 0;
    let counter = 0;
    for(let i=0;i<s.length;i++){
        let char = s.charAt(i)
        if(char =="L"){
            counter++;
        }else if(char == "R"){
            counter--;
        }
        if (counter ==0){
            balancedCount++
        }
    }
    return balancedCount;
};

console.log(balancedStringSplit("LLLLRRRR"))