var groupAnagrams = function(strs) {
  let groups = {}
  strs.forEach(str=>{
    const sortedStr = str.split('').sort().join()
    if(groups[sortedStr]){
        groups[sortedStr].push(str)
    }else{
        groups[sortedStr] = [str]
    }
  })
  return Object.values(groups)
};


//another approach
var groupAnagram = function (strs){
  let groups = {}
  for(let str of strs){
    let freq = new Array(26).fill(0)
    let strLen = str.length
    for(let i=0;i<strLen;i++){
      freq[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    let freqPattern = freq.join("#");
    
    if(!groups[freqPattern]){
      groups[freqPattern] = []
    }
    groups[freqPattern].push(str)
  }
  console.log(groups)
  return Object.values(groups)
}
//console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagram(["bdddddddddd","bbbbbbbbbbc"]))