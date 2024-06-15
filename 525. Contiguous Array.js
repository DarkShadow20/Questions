var findMaxLength = function(nums) {
    const map = new Map()
    let maxLen = 0
    let sum = 0
    map.set(0,-1)
    for(let i=0;i<nums.length;i++){
        sum+=(nums[i] ==0)?1: -1
        if(map.has(sum)){
            maxLen = Math.max(i-map.get(sum),maxLen)
        }else{
            map.set(sum,i)
        }
    }
    return maxLen
};
// const map = new Map()
// map.set("a",1)
// map.set("b",2)
// map.set("c",3)
// map.set("a",2)
// console.log(map)
//console.log(findMaxLength([0,0,0,1,0,0,1,1,1,0]))