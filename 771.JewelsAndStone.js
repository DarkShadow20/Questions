var numJewelsInStones = function(jewels, stones) {
    let countJewels = 0
    for(let j=0;j<jewels.length;j++){
        for(let i=0;i<stones.length;i++){
            if(jewels[j] == stones[i]){
                countJewels++;
            }
        }
    }
    return countJewels
};

console.log(numJewelsInStones("aA","aAAbbbb"))
console.log(numJewelsInStones("z","ZZ"))
console.log(numJewelsInStones("aA","aAAAbb"));