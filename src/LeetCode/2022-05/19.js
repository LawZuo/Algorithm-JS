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