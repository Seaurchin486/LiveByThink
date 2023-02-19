/**
 * 35. 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = null
    nums.some((item,idx) => {
        if (item >= target) {
            index = idx
            return true
        } else {
            return false
        }
    })
    if (index === null) {
        return nums.length
    }
    return index
};

/*
忽略了查询完整个数组都不存在的情况
null 和 0 的布尔值都是false。。不能偷懒啊
woc，忘了查找还有相关算法
*/