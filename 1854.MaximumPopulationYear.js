
var maximumPopulation = function(logs){
    let gainArr = Array(2051).fill(0)
    let max = 0
    for(let i=0;i<logs.length;i++){
        gainArr[logs[i][0]] = gainArr[logs[i][0]] + 1
        gainArr[logs[i][1]] = gainArr[logs[i][1]] - 1
    }
    for(let i=1;i<=gainArr.length - 1 ; i++){
        gainArr[i] += gainArr[i-1] 
        if(gainArr[i] > gainArr[max]){
            max = i
        }
    }
    return max
}


console.log(maximumPopulation([[1993,1999],[2000,2010]]))

console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]))