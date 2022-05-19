/**
 * @question 462. 最少移动次数使数组元素相等 II
 * 给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。
 * 在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。
 * @tip
 * 输入：nums = [1,2,3]
 * 输出：2
 * 解释：只需要两步操作（每步操作指南使一个元素加 1 或减 1）：
 * [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    //排序之后 往中间靠拢
    nums.sort((a,b) => {
        return a - b;
    })
    let result = 0;
    //nums = max - min
    for (let i=0; i<nums.length / 2; i++) {
        result += (nums[nums.length - 1- i] - nums[i]); 
    }
    return result;
};


/**
 * @Question 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *      左括号必须用相同类型的右括号闭合。
 *      左括号必须以正确的顺序闭合。
 * @tip
 * 输入：s = "()[]{}"
 * 输出：true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //越界判断，s的长度只能存在偶数才能匹配
    if ((s.length) % 2 != 0) {
        return false;
    }
    let stack = [];
    let map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');
    // for of 可以遍历字符串
    for (let item of s) {
         //判断item是否存在
         if (map.has(item)) { //匹配到右括号
             //stack栈顶比较是否匹配，是弹栈，否直接返回false
             if (stack[stack.length - 1] !== map.get(item)) {
                 return false;
             }
             stack.pop();
         } else {
             //匹配到左括号，压栈
             stack.push(item)
         }
    };
    //判断stack是否为空，不为空则返回false
    console.log(stack)
    if (stack.length !== 0) {
        return false;
    };
    return true;
};
let test = isValid("()[]{}");
let test2 = isValid("(]");
let test3 = isValid("]");
let test4 = isValid("{");
console.log(test, test2, test3, test4)