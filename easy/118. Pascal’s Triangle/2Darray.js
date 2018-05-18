var generate = function(numRows) {
    let res = []
    if(numRows === 0){
        return res
    }
    for(let i = 0; i<numRows; i++){
        res[i] = new Array(i+1)

        for(let j = 0; j<i+1; j++){
            if(j === 0 || j ===i){
                res[i][j] = 1
            }else{
                res[i][j] = res[i-1][j-1] + res[i-1][j]
            }
        }
    }
    return res
};
