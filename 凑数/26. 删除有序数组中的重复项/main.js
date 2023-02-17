/**
 * 26. 删除有序数组中的重复项
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let point = 0
  let insert = 0
  while (point+1<nums.length && insert<nums.length ) {
    if (nums[point]===nums[++point]) {
      continue
    } else {
      nums[++insert] = nums[point]
    }
  }
  return insert + 1
};