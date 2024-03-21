var containsDuplicate = function(nums) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]] = 1
        }
        if(obj[nums[i]]>=2){
            return true
        }
    }
    return false
};