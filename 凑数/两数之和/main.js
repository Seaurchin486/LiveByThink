/**
 * 两数之和
 * https://leetcode.cn/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0
  let j = 1
  for (; i < nums.length; i++) {
      for (j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};


twoSum([2, 7, 11, 15], 9) // [0,1]

/*
暴露问题：
1. 普通 for 循环都不会写了
2. 嵌套循环内层初始化问题
*/