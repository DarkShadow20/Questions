var isIsomorphic = function(s, t) {
    let objS = {}
    let objT = {}
    for(let i=0;i<s.length;i++){
        let c1 = s[i]
        let c2 = t[i]

        if(( objS.hasOwnProperty(c1) && objS[c1] != c2) || ( objT.hasOwnProperty(c2) && objT[c2] != c1)){
            return false
        }
        objS[c1] = c2
        objT[c2] = c1
    }
    return true
};

console.log(isIsomorphic("foo","bar"))
console.log(isIsomorphic("egg","add"))
console.log(isIsomorphic("paper","title"))