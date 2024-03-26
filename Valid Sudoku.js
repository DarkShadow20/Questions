var isValidSudoku = function(board) {
    let obj = {} 
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let char_val = board[i][j]
            if(char_val != "."){
                const rowString = `${char_val} at row ${i}`
                const colStirgn = `${char_val} at col ${j}`
                const boxString = `${char_val} at box ${Math.floor(i/3)} , ${Math.floor(j/3)}`

                if(obj.hasOwnProperty(rowString) || obj.hasOwnProperty(colStirgn) || obj.hasOwnProperty(boxString)){
                    return false
                }else{
                    obj[rowString] = 1
                    obj[colStirgn] = 1
                    obj[boxString] = 1
                }
            }
        }
    } 
    return true;
};



console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))