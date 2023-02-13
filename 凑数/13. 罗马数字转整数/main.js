/**
 * 13.罗马数字转整数
 * https://leetcode.cn/problems/roman-to-integer/
 */

var romanToInt = function (s) {
  let first = 0
  let second = 1
  let count = 0
  for (; first < s.length; first++, second++) {
      let fchar = s[first]
      if (second < s.length) {
          let schar = s[second]
          switch (fchar) {
              case 'C': {
                  if (schar === 'D' || schar === 'M') {
                      count += luomaValueMap[fchar + schar]
                      first++
                      second++
                  } else {
                      count += luomaValueMap[fchar]
                  }
                  break
              }
              case 'X': {
                  if (schar === 'L' || schar === 'C') {
                      count += luomaValueMap[fchar + schar]
                      first++
                      second++
                  } else {
                      count += luomaValueMap[fchar]
                  }
                  break
              }
              case 'I': {
                  if (schar === 'V' || schar === 'X') {
                      count += luomaValueMap[fchar + schar]
                      first++
                      second++
                  } else {
                      count += luomaValueMap[fchar]
                  }
                  break
              }
              default: {
                  count += luomaValueMap[fchar]
              }
          }
      } else {
          count += luomaValueMap[fchar]
      }
  }
  return count
};

let luomaValueMap = {
  'IV': 4,
  'IX': 9,
  'I': 1,
  'V': 5,
  'XL': 40,
  'XC': 90,
  'X': 10,
  'L': 50,
  'CD': 400,
  'CM': 900,
  'C': 100,
  'D': 500,
  'M': 1000
}

/*
双字符不要忘记指针移位
*/