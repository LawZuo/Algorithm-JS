/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @Question 206. 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    //反转链表，将指针反向连接，返回head节点
    let newHead = null;
    let current = head;
    while (current) {
        let nextNode = current.next; //记录当前node的下一个节点
        current.next = newHead; //当前节点指向上一个节点
        newHead = current; //新的头节点等于当前节点
        current = nextNode; //右移
    }
    return newHead;
};

/**
 * @Question 83. 删除排序链表中的重复元素
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，
 * 使每个元素只出现一次 。返回 已排的链表 。
 * @Tip
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    //越界判断
    if (!head) {
        return head;
    }
    let current = head; //默认当前操作的节点为头节点
    //终止条件：链表最后一点指向null
    while (current.next) {
        //记录当前节点的下一个节点
        let next = current.next;
        //判断当前节点与下一个节点是否相同
        if (current.val === next.val) {
            //相同，将当前节点指向下下一个节点
            current.next = next.next;
        } else {
            //不相同，右移
            current = next;
        }


    };
    return head;
};