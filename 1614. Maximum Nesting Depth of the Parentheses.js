var maxDepth = function(s) {
    let openCount = 0;
    let depthCount = 0;
    for(let i=0 ; i<s.length ; i++){
        if(s[i] === "("){
            openCount++;
        }
        if(s[i] === ")"){
            openCount--;
        }
        depthCount = Math.max(depthCount,openCount)
    }
    return depthCount
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))