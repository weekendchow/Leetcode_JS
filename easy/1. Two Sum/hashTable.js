var twoSum = function(nums, target) {
    const len = nums.length;
    let i,val;
    let hash = {};
    for (i=0;i<len;i++) {
        val = target-nums[i];
        if (hash[val] !== undefined)
            return [i,hash[val]];
        else
            hash[nums[i]] = i;
    }
};
