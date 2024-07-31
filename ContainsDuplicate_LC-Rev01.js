var containsDuplicate = function(nums) {
    let uniqueNums = new Set(nums);

    if(uniqueNums.size === nums.length)
        return false;
    else
        return true;
};

//86 ms result: same results as my 1st solution