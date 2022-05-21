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

// ===========================================
/**
 * @Question 700. 二叉搜索树中的搜索
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
 * 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 
 * 如果节点不存在，返回 null 。
 * @Tip 
 * 输入：root = [4,2,7,1,3], val = 2
 * 输出：[2,1,3]
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if (!root) {
        return null;
    };
    
};

/**
 * @Question 235. 二叉搜索树的最近公共祖先
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一
 * 点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * @Tip
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6 
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    //遍历 如果两个值在两侧，那当前节点就是最小值
    //都在一侧则继续找
    //还有一个要注意的是，传的两个值是node节点
    if (!root) {
        return null;
    }
    if ((root.val > p.val && root.val > q.val) || (root.val < p.val && root.val < q.val)) {
        return lowestCommonAncestor(root.val > p.val ? root.left : root.right, p, q);
    }
    return root;
};

// =========================================

/**
 * @Question 653. 两数之和 IV - 输入 BST
 * 给定一个二叉搜索树 root 和一个目标结果 k，
 * 如果 BST 中存在两个元素且它们的和等于给定目标结果，则返回 true。
 * @Tip
 * 输入: root = [5,3,6,2,4,null,7], k = 9
 * 输出: true
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    //树不会重复，所以可以定义一个set来存储检索过的数字
    //将当前值与哈希里的数据匹配，如果存在目标值则返回true
    //全部遍历完不存在返回false
    let set = new Set();
    function Loop(node, k) {
        if (!node) {
            return false; //退出条件
        }
        let curr = k - node.val;
        if (set.has(curr)) {
            return true
        };
        set.add(node.val);
        return Loop(node.left, k) || Loop(node.right, k)
    }
    return Loop(root, k);
};