/**
 * 21. 合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    if (!list2) {
      return null
    } else {
      return list2
    }
  } else if (!list2) {
    return list1
  }
  let head = null
  let outlist = null
  if (list1.val < list2.val) {
    outlist = list1
    head = list1
    list1 = list1.next
  } else {
    outlist = list2
    head = list2
    list2 = list2.next
  }
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1
      head = list1
      list1 = list1.next
    } else {
      head.next = list2
      head = list2
      list2 = list2.next
    }
  }
  head.next = list1 ? list1 : list2
  return outlist
};

/*
一开始忽视了链表一开始为空的情况
参数本身就是指针自然可以被重新赋值
循环中判断太多了，退出循环不应该在循环中判断
*/