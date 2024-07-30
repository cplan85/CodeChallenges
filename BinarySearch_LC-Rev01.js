//if the list is ordered, then it makes sense to use a binary search
var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        // if the target is less than the number at the halfway point, then we know the target is in the lower half, else the target must be in the upper half of the array
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};