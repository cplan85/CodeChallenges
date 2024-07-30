var twoSum = function(nums, target) {
    
    // create a pairAndIndex that will save such as {0:0, 4:1, 3:2, 0:3} if input is [0,4,3,0]
    pairAndIndex = {}
    result = []

    nums.forEach((num, index ) => {
        if ( pairAndIndex.hasOwnProperty((target - num))) {
            result = [index, pairAndIndex[target -num] ]
        }
        else {
            pairAndIndex[num] = index;
        }
    })

    return result;
    
};

twoSum([0,4,3,0], 0);