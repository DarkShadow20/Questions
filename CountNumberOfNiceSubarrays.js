/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var mainFunc = function(nums,k){
    if(k<0){
        return 0
    }
    let l=0,r=0,sum=0,cnt=0
    while(r<nums.length){
        sum += (nums[r]%2);
        while(sum > k){
            sum = sum - (nums[l]%2)
            l++
        }
        cnt = cnt + (r-l+1)
        r++
        }
        return cnt
}
var numberOfSubarrays = function(nums, k) {
    let resLessThanK = mainFunc(nums,k)
    let resLessThanKMinusOne = mainFunc(nums,k-1)
    return resLessThanK - resLessThanKMinusOne
};


console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2))