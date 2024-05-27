var merge = function(nums1, m, nums2, n) {
    let nums3 = []
    let p = 0
    let q = 0
    while(p<m && q<n){
        if(nums1[p] <= nums2[q]){
            nums3.push(nums1[p])
            p++
        }else{
            nums3.push(nums2[q])
            q++
        }
    }
    while(p<m){
        nums3.push(nums1[p++])
    }
    while(q<n){
        nums3.push(nums2[q++])
    }
    for(let i=0;i<m+n;i++){
        nums1[i] = nums3[i]
    }
    console.log(nums1)
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))