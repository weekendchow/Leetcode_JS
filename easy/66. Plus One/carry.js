var plusOne = function(digits) {
    let carry = 0
    let len = digits.length

    for(i=len-1;i>=0;i--){
        digits[i] += carry
        if(i == len-1) {
             digits[i] += 1;
        }
        if(digits[i] == 10){
          digits[i] = 0;
          carry = 1;
        } else {
          carry = 0;
        }
    }

    if(carry == 1){
        digits.unshift(carry);
    }
    return digits
};
