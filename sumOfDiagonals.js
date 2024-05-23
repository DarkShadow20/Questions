var diagonalSum = function(mat) {
    let lengthOfRow = mat.length
    let lengthOfColumn = mat[0].length
    let sum = 0
    for(let rowNo=0;rowNo<lengthOfRow;rowNo++){
        let primaryD = mat[rowNo][rowNo]
        let secondaryD = mat[rowNo][lengthOfColumn - rowNo - 1]
        sum+= primaryD
        if(rowNo != (lengthOfColumn - 1 - rowNo)){
            sum+=secondaryD
        }        
    }
    return sum
};