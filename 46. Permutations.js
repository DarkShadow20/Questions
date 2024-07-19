let premutations = []

var swap = function ( nums , a , b ){
    let t = nums[a]
    nums[a] = nums[b]
    nums[b] = t
}

var helper = function(nums,index){    
    if(index == nums.length - 1){
        let permutation = []
        for(let x of nums){
            permutation.push(x)
        }
        premutations.push(permutation)
    }else{
        for(let i=index;i<nums.length;i++){
            swap(nums,i,index)
            helper(nums,index+1)
            //backtracking (bringing back to the original state)
            swap(nums,i,index)
        }
    }
}

var permute = function(nums){
    premutations = []
    helper(nums,0)
    return premutations
}