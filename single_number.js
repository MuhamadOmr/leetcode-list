/*
Notes:
XORing two of the same equals zero
A XOR A = 0

Therefore,
A XOR B XOR A = B

In this solution we mutate nums[i] to be
nums[i] = nums[i] XOR nums[i-1].

Given the rules of XOR above, we are left with the number that has no pair to cancel to zero.


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((accNum, singleNum) => {
    return accNum ^ singleNum;
  });
};

console.log(singleNumber([4, 1, 2, 1, 2]));
