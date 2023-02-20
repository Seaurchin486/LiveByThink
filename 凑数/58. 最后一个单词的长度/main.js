/**
 * 58. 最后一个单词的长度
 * https://leetcode.cn/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0
  let i = s.length - 1
  while(s[i] === ' ') {
    i--
  }
  for (; i >= 0; i--) {
      if (s[i] === ' ') {
          break
      }
      count++
  }
  return count
};

/*
倒叙遍历应该用i--
循环中减少判断，能提高运行时效率
*/