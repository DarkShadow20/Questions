var firstUniqChar = function(s) {
    let map = {}
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            map[s[i]]++
        }else{
            map[s[i]] = 1
        }
    }
    for(let i in map){
        if(map[i] == 1){
            return s.indexOf(i)
        }
    }
    return -1
};


console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))