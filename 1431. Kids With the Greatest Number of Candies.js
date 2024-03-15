var kidsWithCandies = function(candies, extraCandies) {
    let maxCandy =0;
    let counterArr = []
    for(let i=0;i<candies.length;i++){
        if(maxCandy < candies[i]){
            maxCandy = candies[i]
        }
    }
    for(let i = 0;i<candies.length; i++){
        if(maxCandy <= (candies[i] + extraCandies))
            {
                counterArr.push(true)
            }else{
                counterArr.push(false)
            }
    }
    return counterArr
};

console.log(kidsWithCandies([2,3,5,1,3],3))