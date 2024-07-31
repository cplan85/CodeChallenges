var majorityElement = function(nums) {
    let occurence = nums.length / 2;
    let NumberAndCount = {};

     for (const number of nums) {
        if (NumberAndCount[number]) {
            NumberAndCount[number] +=1;
        } else {
            NumberAndCount[number] = 1;
        }

        if (NumberAndCount[number] > occurence) {
            return number
        }
     }
};

majorityElement([3,2,3])