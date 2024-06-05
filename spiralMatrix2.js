var generateMatrix = function(n) {
    let val = 1
    let matrix = Array.from(Array(n),()=>new Array(n).fill(0))
    let top = 0
    let left = 0
    let bottom  = n-1
    let right = n-1
    while(left <= right){
        for(let col = left ; col <= right ; col++){
            matrix[top][col] = val
            val++
        }
        top++

        for(let row = top; row<=bottom;row++){
            matrix[row][right]=val
            val++
        }
        right--

        for(let col = right ; col >= left ;col--){
            matrix[bottom][col]=val
            val++
        }
        bottom--

        for(let row = bottom; row>=top; row--){
            matrix[row][left]=val
            val++
        }
        left++

    }
    return matrix
};


console.log(generateMatrix(3))