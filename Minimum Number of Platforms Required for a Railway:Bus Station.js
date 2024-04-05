var minPlatforms = function(arr,dept){
    let waitArr = Array(2401).fill(0)
    for(let i=0;i<waitArr.length;i++){
        waitArr[arr[i]] +=1
        waitArr[dept[i]] -=1
    }
    let max = 0
    for(let i=1;i<=waitArr.length-1;i++){
        waitArr[i] += waitArr[i-1]
        if(waitArr[i] > max){
            max = waitArr[i]
        }
    }
    return max
}



console.log(minPlatforms([900, 940, 950, 1100, 1500, 1800],[910, 1200, 1120, 1130, 1900, 2000]))

