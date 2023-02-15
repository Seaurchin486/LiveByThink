/**
 * 14. 最长公共前缀
 * https://leetcode.cn/problems/longest-common-prefix/
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let sub = ''
  let index = 0
  let flag = false
  while (true) {
      if (strs[0].length > index) {
          sub += strs[0][index]
      } else { 
        break
      }
      strs.some(str => {
          if (sub[index] !== str[index]) {
              sub = sub.slice(0, -1) ?? ''
              flag = true
              return true
          }
      })
      if (flag) {
          break
      }
      index++
  }
  return sub

};
/*
every some 好方法啊
超出字符长度取字符，避免undefined转化为字符串
若 length 作为 判断,后续空串会出问题
*/