var restoreString = function(s, indices) {
    let newString =[];
    for(let i=0;i<indices.length;i++){
        newString[indices[i]] = s[i]
    }
    return newString.join("");
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))