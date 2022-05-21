/**
 * @desc 节点
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/**
 * @Question 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。。
 */
/**
 * @Answer
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
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

// =============================================================

/**
 * @Question 104: 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例：
 * 输入:  [3,9,20,null,null,15,7]，
 * 输出: 3
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    //每层比较左右节点，使用Math.max获取最大值
    //递归退出条件，如果子节点为null，返回0；如果根节点没有子节点那么他的深度就是0
    if (!root) {
        return 0;
    }
    return Math.max(
        //左右两边比较，取最大值
        this.maxDepth(root.left), this.maxDepth(root.right)
    ) + 1; //每遍历一次，深度加1
};

// ============================================================

/**
 * @Question 101:对称二叉树
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * @Tip
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 */

/**
 * @Answer
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }
    const Loop = function (left, right) {
        //退出条件
        if ((!left && right) || (left && !right)) {
            return false;
        } else if (!left && !right) {
            return true;
        } else if (left.val !== right.val) {
            return false;
        }
        //先比较最外层 再比较最里层
        let L = Loop(left.left, right.right);
        let R = Loop(left.right, right.left);
        return L && R; //里外都返回true结果才返回true
    }
    return Loop(root.left, root.right);
};

//========================================================

/**
 * @Question 226.翻转二叉树
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * @Tip
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    //退出条件
    if (root == null) {
        return null;
    }
    let L = invertTree(root.left);
    let R = invertTree(root.right);
    //互换
    root.left = R;
    root.right = L;
    return root;
};

// =================================================

/**
 * @Question 112.路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点叶子节点 的路径，
 * 这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true 否则，返回 false 。
 * 叶子节点 是指没有子节点的节点。
 * @Tip
 * 输入：
 *      root = [5,4,8,11,null,13,4,7,2,null,null,null,1], 
 *      targetSum = 22
 * 输出：true
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    //思路：记录目标值减去当前节点的值，如果不为0，继续探索
    // 如果为0 返回true， 全部探索完表示不存在，返回false
    
    let mark = 0;
    const Loop = function(node) {
        mark = targetSum - root.val;
        if (root) {
            if (mark == 0) {
                return true;
            } else if (mark > 0) {
                //继续探索
                Loop(node.left);
                return mark;
                Loop(node.right);
            }
        }
    }
    return false;
};