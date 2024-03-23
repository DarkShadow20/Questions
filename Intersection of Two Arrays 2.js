var intersect = function(nums1, nums2) {
    if(nums1.length < nums2.length)
        return intersect(nums2,nums1)
    let map = {}
    let result = [];
    for(let i = 0;i<nums1.length;i++){
        if(map.hasOwnProperty(nums1[i])){
            map[nums1[i]] ++
        }else{
            map[nums1[i]] = 1
        }
    }
    for(x in nums2){
        if(map[nums2[x]] > 0){
            result.push(nums2[x])
            map[nums2[x]]-=1
        }
    }
    return result
};


console.log(intersect([1,2,2,1],[2,2]))
console.log(intersect([4,9,5],[9,4,9,8,4]))
