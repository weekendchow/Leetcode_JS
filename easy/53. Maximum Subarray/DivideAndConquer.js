var maxSubArray = function(nums) {
    if(nums.length == 0){
       return 0;
       }
    return maxSubarrayPartitioner(nums, 0, nums.length-1);
}

var crossSubArray = function(array, left, middle, right){
    let leftSum = -Infinity;
    let sum = 0;
    for(let i=middle; i>=left; i--) {
        sum += array[i];
        if(sum >leftSum){
            leftSum = sum;
        }
    }
    let rightSum = -Infinity;
    sum = 0;
    for(let i=middle+1; i<=right; i++){
        sum += array[i];
        if(sum > rightSum){
            rightSum = sum;
        }
    }
    return leftSum+rightSum;
}

var maxSubarrayPartitioner = function(array, left, right){
    if(left == right){
        return array[left];
    }
    let middle = Math.floor((left+right)/2);
    let leftSum = maxSubarrayPartitioner(array, left, middle);
    let rightSum = maxSubarrayPartitioner(array, middle+1, right);
    let crossSum = crossSubArray(array, left, middle, right);
    return Math.max(crossSum, leftSum, rightSum);
}
