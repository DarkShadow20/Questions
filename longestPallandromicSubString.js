var longestPalindrome = function(s) {
    let len = s.length
    let ans = ""
    let maxLen = 0
    for(let mid = 0; mid < len ; mid++){
        let i = mid - 1
        let j = mid + 1
        let currLen = 1
        while(i>=0 && j < len && s.charAt(i) == s.charAt(j)){
            i--
            j++
            currLen+=2
        }
        if(currLen > maxLen){
            ans = s.substring(i+1,j)
            maxLen = currLen
        }
    }
    for(let mid = 0; mid < len; mid++){
        let i = mid
        let j = mid + 1
        let currLen = 0
        while(i>=0 && j<len && s.charAt(i) == s.charAt(j)){
            i--
            j++
            currLen+=2
        }
        if(currLen > maxLen){
            ans = s.substring(i+1,j)
            maxLen = currLen
        }
    }
    return ans
};

console.log(longestPalindrome("cbbd"))