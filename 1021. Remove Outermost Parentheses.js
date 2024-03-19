var removeOuterParentheses = function(s) {
    let counter = 0;
    let output = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            if(counter){
                output+=s[i];
            }
            counter++;
        }
        else if(s[i] === ")"){
            counter--;
            if(counter)
                output+=s[i]
            }
        }
        return output
};



console.log(removeOuterParentheses("(()())(())"))
