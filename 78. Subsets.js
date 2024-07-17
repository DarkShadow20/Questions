var subsets = function(nums) {
  let result = []
  let n = nums.length
  let totalIterations = Math.pow(2,n)
  for(let no = 0; no < totalIterations; no++){
    let subsequence = []
    for(let bit_pos = 0; bit_pos < n ; bit_pos++){
        let mask = (1 << bit_pos)
        if((no & mask)!=0){
            subsequence.push(nums[bit_pos])
        }
    }
    result.push(subsequence)
  }
  return result
};


console.log(subsets([1,2,3]))