/**
 * 35. 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  function halfSearch(left, right) {
    let half = Math.floor((left + right) / 2)
    if (nums[half] > target) {
      if (right - left >= 2) {
        return halfSearch(left, half)
      } else {
        return half
      }
    } else if (nums[half] === target) {
      return half
    } else if (nums[half] < target) {
      if (right - left >= 2) {
        return halfSearch(half, right)
      } else {
        return half + 1
      }
    }
  }
  if (nums.at(-1) < target) {
    return nums.length
  }
  if (nums[0] > target) {
    return 0
  }
  return halfSearch(0, nums.length-1)
};

/*
忽略了查询完整个数组都不存在的情况
null 和 0 的布尔值都是false。。不能偷懒啊
woc，忘了查找还有相关算法
犯了赋值当等于的低级错误，又忘记数组长度有可能为1了
如果一开始不在区间内，二分就没有意义了
*/

let nums = [1, 3, 5, 6]
let target = 2
let output = searchInsert(nums, target)
