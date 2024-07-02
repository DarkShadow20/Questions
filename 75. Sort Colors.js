

var sortColors = function(nums) {
    let i=0;
    let j=0;
    let k=nums.length-1
    while(j<=k){
        switch(nums[j]){
            case 0:
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
                i++
                j++
                break
            case 1:
                j++;
                break;
            case 2:
               let temp2 = nums[j]
                nums[j] = nums[k]
                nums[k] = temp2
                k--
        }
    }
};


console.log(sortColors([2,0,2,1,1,0]))