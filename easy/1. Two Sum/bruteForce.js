var twoSum = function(nums, target) {
    let i,len = nums.length;
    for (i=0;i<len-1;i++) {
        for (j=i+1;j<len;j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};
