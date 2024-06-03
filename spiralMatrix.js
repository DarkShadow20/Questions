var spiralOrder = function(matrix){
    let rows = matrix.length
    let col = matrix[0].length
    let count = 0
    let result = []
    let up = 0
    let down = rows - 1
    let left = 0
    let right = col - 1
    
    while(count < rows * col){

        //traverse from left to right
        for(let cols = left; cols<=right;cols++){
            result.push(matrix[up][cols])
            count++
        }

        //traverse from up to down
        for(let row = up + 1;row <= down;row++){
            result.push(matrix[row][right])
            count++
        }
        //traverse from right to left
        if(up!=down){

            for(let col = right - 1;col>=left;col--){
                result.push(matrix[down][col])
                count++
            }
        }
        //traverse from down to up
        if(right!=left){
            for(let row = down - 1;row > up; row--){
                result.push(matrix[row][left])
                count++
            }
        }
        
        up++
        down--
        left++
        right--
    }
    return result
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
