let result = []
let obj = {
    "2":["a","b","c"],
    "3":["d","e","f"],
    "4":["g","h","i"],
    "5":["j","k","l"],
    "6":["m","n","o"],
    "7":["p","q","r","s"],
    "8":["t","u","v"],
    "9":["w","x","y","z"]
}  

var helper = function(digits,index,sfs){
    if(index == digits.length){
        result.push(sfs)
    }else{
        let digitPressed = digits.charAt(index)
        let charPossibilities = obj[digitPressed]
        for(let char of charPossibilities){
            helper(digits,index+1,sfs+char)
        }
    }
}
var letterCombinations = function(digits) {
    
    if(digits.length == 0){
        return result
    }
    
    helper(digits,0,"")
    return result
};


console.log(letterCombinations("23"))