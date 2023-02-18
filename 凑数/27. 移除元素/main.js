/**
 * 27. 移除元素
 * https://leetcode.cn/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i=0;i<nums.length;i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};

/*
用filter重新赋值就违背了O(1)空间复杂度要求
在循环过程中删除元素会导致小标跳变漏过元素
*/

let nums = [0,1,2,2,3,0,4,2]
removeElement(nums, 2)
console.log(nums)