/**
 * @question 一次编辑 
 * 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 
 * 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 * @tip
 * 输入: 
        first = "pale"
        second = "ple"
   输出: True
 */

/**
 * @answer 中等
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    //如果两个str的长度查不在1范围内，则都不满足题意，直接返回false
    //仅存在一个差值 才能满足题意的三种操作
    //可以遍历两个str，如果当前索引下的两个值不相等，则将长度长的索引进1，再次比较
    //可以预留一个flag，第一次进来修改后，不能修改第二次，如果再次进入判断直接返回false
    let firstLen = first.length, secondLen = second.length;
    if (first === second) {
        return true;
    }
    if (Math.abs(firstLen - secondLen) > 1) {
        return false;
    } else {
        if (firstLen == 0 || secondLen == 0) {
            return true;
        } else {
            //定义标记，两个str的索引
            let flag = true, x = 0, y = 0;
            //取最长的str遍历
            let len = firstLen > secondLen ? firstLen : secondLen;
            while (x < len) {
                if (first[x] != second[y]) {
                    console.log("第一次进来", first[x], second[y])
                    //如果之前进来过，直接返回false
                    if (!flag) {
                        return false;
                    };
                    //第一次进来，将flag变为false
                    flag = false;
                    //取长的数值加1，一样长同时加1
                    if (firstLen > secondLen) {
                        x++;
                    } else if (firstLen < secondLen) {
                        y++;
                    } else {
                        x++;
                        y++;
                    }
                } else {
                    x++;
                    y++;
                }
                
            }
            return true;
        }
    }

};
let test = oneEditAway("ab", "bc");
console.log(test)