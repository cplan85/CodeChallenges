var containsDuplicate = function(nums) {
    pairAndCount = {}

    for (const number of nums) {

        if (pairAndCount[number]) {
            return true;
        } 
        pairAndCount[number] = 1;
    }

    return false;
};

//86 ms result 