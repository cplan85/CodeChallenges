var search = function(nums, target) {
    notFoundIndex = -1;
    for(var i=0; i< nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return notFoundIndex;
};