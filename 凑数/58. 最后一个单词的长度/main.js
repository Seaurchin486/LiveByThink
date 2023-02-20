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
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ' ') {
          if (!count) {
              continue
          } else {
              break
          }
      }
      count++
  }
  return count
};

/*
倒叙遍历应该用i--
*/