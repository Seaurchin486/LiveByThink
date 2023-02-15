/**
 * 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) {
      return false
  }
  let stack = s[0]
  for (let i = 1; i < s.length; i++) {
      if ([')', ']', '}'].includes(s[i])) {
          if (stack.at(-1) === map[s[i]]) {
              stack = stack.slice(0, -1)
              continue
          } else {
              return false
          }
      } else {
          stack += s[i]
      }
  }
  if (stack.length !== 0) {
      return false
  } else {
      return true
  }
};
const map = {
  ')': '(',
  ']': '[',
  '}': '{'
}

/*
长度为奇数则必然不闭合
结束时忘记判断栈是否为空
*/