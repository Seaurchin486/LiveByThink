/**
 * 9. 回文数
 * https://leetcode.cn/problems/palindrome-number/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 负数不可能回文
  if (x < 0) {
      return false
  } else {
      let temp = x + ''
      let l = 0
      const lend = Math.floor(temp.length / 2)
      let r = temp.length - 1
      const rend = Math.ceil(temp.length / 2)
      while (l <= lend && r >= rend) {
          if (temp[l] !== temp[r]) { return false }
          l++
          r--
      }
      return true
  }
};

/**
 * 简单题水题了
 */