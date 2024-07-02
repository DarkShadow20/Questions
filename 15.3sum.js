// sorting the array is must to reduce time complexity from O(N^3) to O(N^2)



var twoSum = function(nums,ind,target,result){
    let i = ind
    let j = nums.length - 1
    while(i < j){
        let b = nums[i]
        let c = nums[j]
        if(c + b  == target){
            let lst = []
            lst.push(-target)
            lst.push(b)
            lst.push(c)
            result.push(lst)
            i++ 
            while(nums[i] == nums[i -1]){
                i++
            }
            j--
            while( nums[j] == nums[j + 1]){
                j--
            }
        }
        else if( c + b < target){
            i++
        }
        else{
            j--
        }
    }
}



var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let ans = []
    for(let i = 0;i<nums.length;i++){
        if( i == 0 || nums[i]!=nums[i-1]){
            let a = nums[i]
            twoSum(nums,i+1,-a,ans)
        }
    }
    return ans
};

console.log(threeSum([-1,0,1,2,-1,-4]))