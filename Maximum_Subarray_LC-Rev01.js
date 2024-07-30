var maxSubArray = function(nums) {
    var localMaximums = [];
    for(let i=0; i < nums.length; i++) {
       
        let localValue = nums[i];
        let pre, localMaxVal;
        
        if (i === 0)
            {pre = nums[i]} 
        else {
            pre = nums[i] + localMaximums[i-1];
        };
        
        localValue > pre ? localMaxVal = localValue : localMaxVal = pre;
    
        localMaximums.push(localMaxVal)
        
    }
   return  Math.max(...localMaximums);
};

maxSubArray([2,0,3,-2])