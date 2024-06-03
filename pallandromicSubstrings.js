var countSubstrings = function(s) {
    let len = s.length
    let result = s.length
    for(let mid = 0; mid < len ; mid++){
        let i = mid - 1
        let j = mid + 1
        while(i>=0 && j < len && s.charAt(i) == s.charAt(j)){
            i--
            j++
            result++
        }
       
    }
    for(let mid = 0; mid < len; mid++){
        let i = mid
        let j = mid + 1
        while(i>=0 && j<len && s.charAt(i) == s.charAt(j)){
            i--
            j++
            result++
        }
    }
    return result
};


console.log(countSubstrings("aaab"))