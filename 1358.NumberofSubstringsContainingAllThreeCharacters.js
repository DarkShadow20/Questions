var numberOfSubstrings = function(s) {
    let count = 0;
    let obj = {
        'a': -1,
        'b': -1,
        'c': -1,
    }

    for(let i = 0; i < s.length; i++) {
        obj[s[i]] = i;
        if(obj['a'] !== -1 && obj['b'] !== -1 && obj['c'] !== -1) {
            count = count + (1 + Math.min(obj['a'], obj['b'], obj['c']));
        }
    }

    return count;

};


console.log(numberOfSubstrings("abcabc"))