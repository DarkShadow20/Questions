var twoSum = function(nums, target) {
    const map = {}

    for(let i=0;i<nums.length;i++){
        const anotherElement = target - nums[i]
        if(anotherElement in map){
            return [map[anotherElement] , i]
        }
        map[nums[i]] = i
    }
    return null;
};


console.log(twoSum([3,3],6))