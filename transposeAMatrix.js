var transpose = function(matrix) {
    let lengthOfRow = matrix.length
    let lengthOfColumn = matrix[0].length;
    let output = [];
    for(let i=0;i<lengthOfColumn;i++)
    {
        const temp = [];
        for(let j=0;j<lengthOfRow;j++){
            temp.push(matrix[j][i]);
        }
        output.push(temp)
    }
    return output;
};