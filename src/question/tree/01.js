/**
 * @Question 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。。
 */

/**
 * @Answer
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var result = [];
    function Loop(node) {
        if (node !== null) { //如果当前节点不为空
            //先序遍历 先添加结果
            result.push(node.val);
            Loop(node.left);
            Loop(node.right);
        }
    }
    Loop(root);
    return result;
};