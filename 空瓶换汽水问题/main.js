/**
题目：有这样一 道智力题:“某商店规定:三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝?”答案是5瓶，方法如下:先用9个空瓶子换3瓶汽水，喝掉3瓶满的，喝完以后4个空瓶子，用3
个再换一瓶，喝掉这瓶满的，这时候剩2个空瓶子。然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用3个空瓶子换- -瓶满的还给老板。如果小张手上有n个空汽水瓶，最多可以换多少瓶汽水喝?
问题规模：n（ 1<=n<=100 ）
注意：n=0 表示输入结束，你的程序不应当处理这一行。
*/

// 思路：1.空瓶取三的商 2.商和余数组成新的空瓶数 3. 累计每轮的商之和，若最后余两个空瓶则最终结果再加 1
// 方案：明显可以用递归来简化代码

// 思路二：剩两个空瓶就可以换一瓶, 可以按每两个空瓶就可以换一瓶但不保留空瓶

let readLine = require('readline')

const rl = readLine.createInterface(process.stdin, process.stdout)
rl.on('line',line => {
  let temp = parseInt(line)
  if (temp !== 0)
    console.log(calcDrinking(temp))
})

function calcDrinking(n) {
  return parseInt(n/2)
}