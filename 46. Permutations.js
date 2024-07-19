let premutations = []
var helper = function(nums,index){
    let result = []
    if(index == nums.length - 1){
        for(let x of nums){
            result.push(x)
        }
        premutations.push(result)
    }else{
        for(let i=index;i<nums.length;i++){
            swap(nums,i,index)
            helper(nums,index+1)
        }
    }
}

var permute = function(nums){
    helper(nums,0)
}