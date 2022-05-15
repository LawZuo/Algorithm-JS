import BinarySearchTree from "./tree";

/**
 * @name AVL树 自平衡树：删除和移除节点时，任意一个节点的左右子节点高度最多相差1
 * 节点高度：
 * 平衡因子：
 * 平衡操作：旋转
 */
//计数器，用来处理平衡因子的数值
 const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}
class AVLTree extends BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    /**
     * 
     * @param {*} node 
     * @returns { Number } 传入节点的最大高度-
     */
    getNodeHeight(node) {
        //递归 子节点为null退出
        if (node == null) {
            return -1;
        }
        return Math.max(
            //左右两边比较，取最大值
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1;
    }

    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        switch(heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT; //右节点多于左节点 1
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT; // 2
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT; //4
            case 2:
                return BalanceFactor.UNBALANCED_LEFT; // 5
            default:
                return BalanceFactor.BALANCED; // 3
        }
    }

    /**
     * @desc 左-左旋转 LL：向右的单旋转
     * @param { root } 根节点
     * @return { Node } 新的根节点
     */
    rotationLL(node) {
        const tmp = node.left; //保存root的左侧节点 （新的根节点）
        node.left = tmp.right; //将root的右节点替换为左子节点的右节点
        tmp.right = node;
        return tmp;
    }

    /**
     * @desc 右-右 RR: 向右的单旋转
     * @param { root } 根节点
     * @return { node } 新的根节点
     */
    rotationRR(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    /**
     * @desc 左-右 LR: 向右的双旋转 (左侧的高度大于右侧的高度)
     * @param { root } 根节点
     * @return { Node } 新的根节点
     */
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    /**
     * @desc 右-左 RL: 向左的双循环 (右侧的高度大于左侧的高度)
     * @param { root  } 根节点
     * @return { Node } 新的根节点
     */
    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    /**
     * @desc 插入节点
     * @param { key } 要插入的值
     * @return { Node } 
     */
    insert(key) {
        this.root = this.insertNode(this.root, key);
    };
    insertNode(node, key) {
        //遍历插入节点
        if (node == null) {
            return new Node(key); //如果数空，直接返回要插入值的节点
        } else if (node.key > key) {
            node.left = this.insertNode(node.left, key);
        } else if (node.key < key) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }

        const balanceFactor = this.getBalanceFactor(node); //计算左右节点的高度差
        //如果左侧高
        if (balanceFactor == BalanceFactor.UNBALANCED_LEFT) {
            //判断 如果要插入的值小于左子节点，则说明往左插 左侧多了，进行左左单循环，右侧多了则进行左-右双循环
            if (node.left.key > key) {
                node = this.rotationLL(node);
            } else {
                return  this.rotationLR(node);
            }
        };
        if (balanceFactor = BalanceFactor,UNBALANCED_RIGHT) {
            if (node.right.key < key) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node);
            }
        }
        return node;
    }

    /**
     * @desc 移除节点
     * @param { Node }
     * @return { Node }
     */
    removeNode(node, key) {
        node = super.removeNode(Node, key);
        if (node == null) {
            return node;
        };
        //检查树是否平衡
        //获取节点左右差值
        const balanceFactor = this.getBalanceFactor(node);
        // 如果左边多2
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            //让根节点的左子节点作为根节点继续计算差值
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            //如果是左子节点的左侧多，则进行左-左单旋转
            if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationLL(node);
            }
            // 如果右侧多，则进行左-右双循环
            if (balanceFactorLeft === balanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node.left);
            }
        }
        
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node);
            }
            if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationRL(node.right);
            }
        }
    };

}