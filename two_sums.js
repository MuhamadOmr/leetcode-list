/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numbs = {};
  for (let i = 0; i < nums.length; i++) {
    let currentItem = nums[i];
    let indexOfComplementItem = numbs[target - currentItem];
    let hasComplementItem = indexOfComplementItem !== undefined;
    let didExistBefore = numbs[nums[i]] !== undefined;

    // check if the element already exists and handle if it does solve the prolem
    if (didExistBefore && hasComplementItem) {
      return [indexOfComplementItem, i];
    }

    if (
      !didExistBefore &&
      hasComplementItem
    ) {
      return [indexOfComplementItem, i];
    }

    numbs[currentItem] = i;

  }
};

const restult = twoSum([3, 3], 6);

console.log(restult);
