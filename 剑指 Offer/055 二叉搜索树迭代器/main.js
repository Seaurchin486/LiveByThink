/**
力扣 https://leetcode.cn/problems/kTOapQ/

实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器
* BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
* boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
* int next()将指针向右移动，然后返回指针处的数字。注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。

输入
inputs = ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
inputs = [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
输出
[null, 3, 7, true, 9, true, 15, true, 20, false]

解释
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // 返回 3
bSTIterator.next();    // 返回 7
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 9
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 15
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 20
bSTIterator.hasNext(); // 返回 False

*/

// 目标：保障方法调用符合预期
/*
"BSTIterator" --- [7, 3, 15, null, null, 9, 20]
"next"        --- null
"hasNext"     --- null
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 思路：传入 root 为线性存储的二叉数可用其特性访问子结点 也就是左右指针明确
// 中序遍历过程 左子树 直到出现 左指针为null 取地第一个 再对其右子树重复之前操作 左右都完了向上一级回溯 再次取得 再对右子树重复操作， 此时需要额外向上回溯 要总结一下规律


/**
 * @param {TreeNode} root
 */
 var BSTIterator = function(root) {
  return {
    tree: root,
    head: -1
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  // 移动指针
  return 3
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return true
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */