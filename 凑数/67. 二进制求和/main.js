/**
 * 67. 二进制求和
 * https://leetcode.cn/problems/add-binary/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let c = ''
  let carryIndex = NaN
  while (i >= 0 && j >= 0) {
    let sum = parseInt(a[i]) + parseInt(b[j]) + (carryIndex === i ? 1 : 0)
    c = (sum % 2) + c
    if (sum >= 2) {
      carryIndex = i - 1
    }
    i--
    j--
  }
  while (i >= 0) {
    let sum = parseInt(a[i]) + (carryIndex === i ? 1 : 0)
    c = (sum % 2) + c
    if (sum >= 2) {
      carryIndex = i - 1
    }
    i--
  }
  if (j >= 0) {
    if (carryIndex === -1) {
      carryIndex = j
    } else {
      carryIndex = NaN
    }
  }
  while (j >= 0) {
    console.log(carryIndex)
    let sum = parseInt(b[j]) + (carryIndex === j ? 1 : 0)
    c = (sum % 2) + c
    if (sum >= 2) {
      carryIndex = j - 1
    }
    j--
  }
  if (carryIndex === -1) {
    c = '1' + c
  }
  return c
};

addBinary("10010100010010101001101100100101111001000011100000011111", "100111010100001111101001110010000110011011110001001101011010100110111100011")

/*
自带的转换方法会遇到溢出问题
循环判断条件写反了
光赋值i来记录了，导致j没办法顺应
进位记录还要重置
*/