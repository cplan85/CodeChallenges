var twoSum = function(nums, target) {
    let result = [];

   nums.forEach( (num, index) => {
        let numbersToCheck = [...nums];
        // remove 
        numbersToCheck.splice(index, 1);

        numbersToCheck.forEach( (checkedNumber, checkedIndex) => {
            if (num + checkedNumber == target) {
                result = [index, checkedIndex]
            }
        })
    }
    )
    console.log(result)
    return result;
    
};

twoSum([0,4,3,0], 0);