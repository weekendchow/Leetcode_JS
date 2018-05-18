var removeDuplicates = function(nums) {
    let i, j, prev, len = nums.length;
    let removed = [];
    for(i=0; i<len; i++){
        if(nums[i] === prev){
            removed.push(i);
        }
        prev = nums[i];
    }
    for(j = removed.length-1; j>=0; j--){
        nums.splice(removed[j],1);
    }
    return nums.length;

};
