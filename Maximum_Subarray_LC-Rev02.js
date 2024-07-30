var maxSubArray = function(nums) {
    let currMax= nums[0];
    let maximum=nums[0];
    //we skip first iteration
    for(let i=1; i < nums.length; i++) {
       currMax = Math.max(nums[i], currMax + nums[i]);
       maximum = Math.max(maximum, currMax)
      
    }
   return  maximum;
};

maxSubArray([2,0,3,-2])