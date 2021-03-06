/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  //two pointers
  var pos = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos += 1;
    }
  }
  for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};

moveZeroes([0, 1, 0, 3, 12]);
