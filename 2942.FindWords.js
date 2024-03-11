var findWordsContaining = function(words, x) {
    let indexArr = [];
    for(let i=0;i<words.length;i++){
        if(words[i].indexOf(x)>=0){
            indexArr.push(i);
        }
    }
    return indexArr;
};