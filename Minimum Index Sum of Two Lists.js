var findRestaurant = function(list1, list2) {
    let obj1 = {}
    let currIndex = 0
    let ans = []
    let sum = Number.MAX_VALUE;

    for(let i=0;i<list1.length;i++){    
        obj1[list1[i]] = i
    }

    for(let i = 0;i<list2.length;i++){
        if(obj1.hasOwnProperty(list2[i])){
            currIndex =  i + obj1[list2[i]]
            if(currIndex < sum){
                ans = []
                ans.push(list2[i])
                sum = currIndex
            }
            else if(currIndex == sum){
                ans.push(list2[i])
            }
        }
    }
    return ans
};


console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))