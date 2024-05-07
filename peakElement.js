function f(index,nums){
    return nums[index] - nums[index-1] > 0
}

var peakElement = (nums)=>{
    if(nums.length == 1){
        return 0;
    }
    // lo and hi always will be true and false respectively
    let lo = 1
    let hi = nums.length-1
    // if lo and hi are correctly having true and false respectively, handling edge cases
    if(!f(lo,nums)){
    // lo is false initially
        return 0
    }else if (f(hi,nums)){
        // hi is true initially
        //nums[n] <= nums[n-1] > nums[n-2]
        return hi
    }
    while(lo<hi-1){
        let mid = parseInt((lo + hi )/2)
        if(f(mid, nums)) lo = mid
        else hi = mid
    }
    return lo
}