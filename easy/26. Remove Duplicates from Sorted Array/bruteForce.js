var maxSubArray = function(nums) {
    let maxSumSoFar = -Infinity;
    let maxISoFar = 0;
    let maxJSoFar = -1;
    let len = nums.length;
    for(let i=0; i<len; i++){
        let sum = 0;
        for(let j=i; j<len; j++){
            sum+=nums[j];
            if(sum>maxSumSoFar){
                maxSumSoFar = sum;
                maxISoFar = i;
                maxJSoFar = j;
            }
        }
    }
    return maxSumSoFar;

};
