var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            sum = nums[i] + nums[j]
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15],9));    //Target is 9
//i = 1, j = 0: nums[1] + nums[0] = 7 + 2 = 9


//------------------------------------------------------
//Logic:
//--Nested for loops iterate through pairs of indices in the array (i and j).
//--For each pair of indices, the sum of the corresponding elements is computed.
//--If the sum equals target, the indices [i, j] are returned.
//--If no pair is found by the end of the loops, an empty array [] is returned.