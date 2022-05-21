/**
 * @Question 961. 在长度 2N 的数组中找出重复 N 次的元素
 * 给你一个整数数组 nums ，该数组具有以下属性：
 *      nums.length == 2 * n.
 *      nums 包含 n + 1 个 不同的 元素 
 *      nums 中恰有一个元素重复 n 次
 * 找出并返回重复了 n 次的那个元素。
 * @Tip
 * 输入：nums = [1,2,3,3]
 * 输出：3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
     //暴力解，因为重复值只有一个，直接找出来return
    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<nums.length; j++) {
            if (i !== j && nums[i] == nums[j]) {
                return nums[i];
            }
        }
    }
 };