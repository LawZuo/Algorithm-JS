/**
 * 红黑树: 一颗自平衡二插搜索树
 * @Result
 *      1.每个节点不是黑色就是红色
 *      2. 树的根节点是黑的
 *      3. 所有叶子节点都是黑色的
 *      4. 如果一个节点是红的，那么它的两个子节点都是黑的
 *      5. 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点
 *      6. 从给定的节点到它的后代节点的所有路径包含相同数量的黑色节点。
 */

/**
 * @param 创建一个红黑树的节点
 */
class RedBlackNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.color = Colors.RED; //创建的节点默认为红色
        this.parent = null; //指向父节点的引用
    }
    //验证是否为红节点，返回boolean
    isRed() {
        return this.color === Colors.RED;
    }
}


/**
 * @param 定义一个红黑树的类
 */
class RedBlackTree {
    constructor() {
        this.root = null;
    };

    /**
     * @desc 修复操作
     * 在插入节点后，要进行两个操作：重新填色，旋转
     * 如果要插入节点的颜色与其父节点相同，则需要 依次向上修改
     * 如果要插入节点父节点的颜色为红色，需要改变父节点，祖父节点和父节点的相邻节点
     */
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) {
            //标记父节点以及父节点的上一级节点
            let parent = node.parent;
            const grandParent = parent.parent;
            //父节点是上一级节点的左子节点
            if (grandParent && grandParent.left === parent) {
                //标记其右节点
                const uncleR = grandParent.right;
                //如果目标节点的上一级节点都是红色的
                if (uncleR && uncleR.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncleR.color = Colors.BLACK;
                    node = grandParent; //将当前节点的引用指向parent，继续检查树是否有其他冲突；
                } else {
                    //如果上一层节点颜色不相同，进行相对应的旋转操作
                    //当前节点在父节点的右侧
                    if(node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotationLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            } else if (grandParent && grandParent.left === parent) {
                //父节点是上一级节点的右子节点, 标记其左节点
                const uncleL = grandParent.left;
                if (uncleL && uncleL.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncleL.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    if (node === parent.left) {
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    } else if (node === parent.right) {
                        this.rotationRR(grandParent);
                        parent.color = Colors.BLACK;
                        grandParent.color = Colors.RED;
                        node = parent;
                    }
                }
            }
        }
        this.root.color = Colors.BLACK;
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
     * @desc 左-左旋转 (右旋转)
     */
    rotationLL(node) { //传入父节点g
        //取左子节点
        const tmp = node.left; //标记左侧节点n
        node.left = tmp.right;
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        //判断 传入的父节点是否还有父节点
        if (!node.parent) {
            //如果没有，则直接将左侧子节点至为根节点
            this.root = tmp;
        } else {
            //如果存在，将旋转好的树重新连接新的根节点
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }

    /**
     * @desc 右-右旋转 (RR)
     */
    rotationRR(node) {
        //取右节点
        const tmp = node.right;
        //将tmp的左节点连接node节点
        node.right = tmp.left;
        if (tmp.left && tmp.left.key) {
            //如果tmp的左节点存在，则重置parent
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }

    /**
     * @desc 插入操作
     * @param { key } 传入值
     * @return { void }
     */ 
    insert(key) {
        if (!this.root) {
            //如果树空
            this.root = new RedBlackNode(key); //定义一个node节点
            //数的根节点是黑的
            this.root.color = Colors.BLACK;
        } else {
            //如果树不为空,继续向下查找执行插入操作
            const newNode = this.insertNode(this.root, key);
            //验证红黑树规则是否满足
            this.fixTreeProperties(newNode);
        }
    };

    /**
     * @des 插入节点
     * @param { Node, Key } node节点对象, 要插入的值
     * @return { Node } 返回插入值的节点
     */
    insertNode(node, key) {
        if (key < node.key) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            } else {
                return this.insertNode(node.left, key);
            }
        }
        if (key > node.key) {
            if (node.right == null) {
                node.right = new RedBlackNode(key);
                node.right.parent = node;
                return node.right;
            } else {
                return this.insertNode(node.right, key);
            }
        }
    }  
}
