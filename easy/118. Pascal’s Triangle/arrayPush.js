var generate = function(numRows) {
    let res = new Array()
    if(numRows === 0){
        return res
    }
    res.push([1])
    for(let i = 1; i<numRows; i++){
        let current_row = new Array()
        let prev_row = res[i-1]
        current_row.push(1)
        for(let j = 1; j < i; j++){
            current_row.push(prev_row[j-1]+prev_row[j])
        }
        current_row.push(1)
        res.push(current_row)
    }
    return res
};
