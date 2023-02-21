/**
 * 66. 加一
 * https://leetcode.cn/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1
  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
    i--
  }
  digits.unshift(1)
  return digits
};

/*
自加运算是会自动赋值的 i = i++ 实际结果i不变
只有全部为9 才会发生进位。因为只加一，所以不会出现大于 10 的情况
单用等于9判断，就不能进行进位
*/