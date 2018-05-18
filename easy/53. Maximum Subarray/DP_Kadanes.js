var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        sum =  sum < 0 ? nums[i]: sum + nums[i];
        max = Math.max(max, sum);
    }
    return max;

};
