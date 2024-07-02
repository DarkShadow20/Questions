//brute force (O(N^2))
// var twoSum = function(numbers, target) {
//     let n = numbers.length
//     for(let i=0;i<n;i++){
//         let a = numbers[i]
//         for(let j=i+1;j<n;j++){
//             let b = numbers[j]
//             if(a+b == target){
//                 return [i+1,j+1]
//             }
//         }
//     }
//     return []
// };

//optimal approach  (array is sorted that's why two pointer approach is possible else go through hashmap)
var twoSum = function(numbers,target){
    let i=0;
    let j= numbers.length-1
    while(i<j){
        let a = numbers[i]
        let b = numbers[j]
        if(a+b == target){
            return [i+1,j+1]
        }
        if(a+b > target){
            j--
        }
        if(a+b < target){
            i++
        }
    }
    return []
}
console.log(twoSum([2,7,11,15],9))