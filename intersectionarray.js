var intersection = function(nums1, nums2) {
    let map = new Set()
    let result = new Set()
    
    for (let num of nums1) {
        map.add(num)
    }
    

    for (let num of nums2) {
        if (map.has(num)) {
            result.add(num)
        }
    }
    
    return Array.from(result)
};