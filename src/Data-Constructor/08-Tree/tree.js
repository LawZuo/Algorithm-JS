/**
 * ToDo
 * @根节点: 位于数顶部的节点
 * @内部节点: 存在子元素的节点
 * @外部节点: 没有子元素的节点
 * @树的深度: 节点的深度取决于它的祖先节点的数量
 * @树的高度: 所有节点深度的最大值
 * ToDo 二叉树
 * @二叉搜索树: 左侧节点存储比父节点小的值，右侧存储比有节点大的值
 *
 */
//导入树节点
import { Node } from '../../models/index'
import { defaultEquals } from "../../utils";

// ToDo 二叉搜索树
export default class BinarySearchTree {
    constructor(compareFn = defaultEquals) {
        this.compareFn = compareFn;  //用来比较节点值
        this.root = null; //Node类型的根节点
    }

    /**
     * ToDo 插入节点
     * @param key string
     * @param node object
     */
    insertNode(node, key) {
        // if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
        if (node.key > key) {
            if (node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key);
            }
        }
    }
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key); //判断是否为空
        } else {
            this.insertNode(this.root, key); //递归插入key
        }
    }

    /**
     * ToDo 中序遍历
     * @param callBack
     */
    inOrderTraverse(callBack) {
        this.inOrderTraverseNode(this.root, callBack);
    }
    inOrderTraverseNode(node, callBack) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callBack);
            callBack(node.value);
            this.inOrderTraverseNode(node.right, callBack);
        }
    }

    /**
     * @desc 先序遍历
     * @param { Function } callBack
     */
    preOrderTraverse(callBack) {
        this.preOrderTraverseNode(this.root, callBack);
    }
    preOrderTraverseNode(node, callBack) {
        if (node != null) {
            callBack(node.key);
            this.preOrderTraverseNode(node.left, callBack);
            this.preOrderTraverseNode(node.right, callBack);
        }
    }

    /**
     * @desc 后序遍历
     * @param { Function } callBack
     */
    postOrderTraverse(callBack) {
        this.postOrderTraverseNode(this.root, callBack);
    }
    postOrderTraverseNode(node, callBack) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callBack);
            this.postOrderTraverseNode(node.right, callBack);
            callBack(node.key);
        }
    }

    /**
     * @desc 搜索最小值
     * @param { Object } root
     * @return { Object } node
     */
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        let min = node;
        while (min != null && min.left != null) {
            min = min.left;
        }
        return min;
    }

    /**
     * @desc 搜索最大值
     * @param { Object } root
     * @return { Object } node
    */
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let max = node;
        while (max != null && max.right != null) {
            max = max.right;
        }
        return max;
    }

    /**
     * @desc 搜索特定的值
     * @param { String } key
     * @return { Boolean }
     */
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (node.key > key) {
            return this.searchNode(node.left, key);
        } else if (node.key < key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    /**
     * @desc 移除一个节点
     * @param { String } Key
     */
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        //未找到要移除的节点 返回null
        if (node == null) {
            return null;
        }
        //compare
        if (node.key > key) {
            //当前节点的key比目标key大， 继续往左找
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (node.key < key) {
            //当前节点的key比目标key小， 继续往右找
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            //找到了 判断目标节点是否存在子节点

            //无子节点
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            //只有一侧存在节点
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            //同时存在左右子节点
            //找到右子节点树的最小节点，更新当前节点的key为最小节点的key
            const aux = this.minNode(node.right);
            node.key = aux.key;
            //移除最小节点
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}
