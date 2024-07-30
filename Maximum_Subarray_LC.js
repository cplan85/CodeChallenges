var maxSubArray = function(nums) {
    var localMaximums = [];
    for(let i=0; i < nums.length; i++) {
       
        let localValue = nums[i];
        
        
        let pre = nums[i] + localMaximums[i-1];
        
        //this is correct
        if (i === 0){pre = nums[i]};
        console.log(pre, "each Pre", localValue)

        //if (!nums[i+1]){next = nums[i]}
        let localMaxVal = Math.max(localValue, pre)
        

        localMaximums.push(localMaxVal)
        
    }
   return  Math.max(...localMaximums);
};

maxSubArray([2,0,3,-2])