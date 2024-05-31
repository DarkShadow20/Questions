var rotate = function(matrix) {
    let n = matrix.length
    //transpose
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            let temp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = temp
        }
    }
    //then exchange
    for(let row = 0; row<n; row++){
        for(let column = 0; column<n/2; column++){
            let temp = matrix[row][n-column-1]
            matrix[row][n-column-1] = matrix[row][column]
            matrix[row][column] = temp
        }
    }
    return matrix
};


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))