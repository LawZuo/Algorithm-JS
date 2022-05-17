/**
 * @Question 953: 验证外星语词典 
 * @desc 简单
 * 某种外星语也使用英文小写字母，但可能顺序 order 不同。
 * 字母表的顺序（order）是一些小写字母的排列。
   给定一组用外星语书写的单词 words，以及其字母表的顺序 order，
   只有当给定的单词在这种外星语中按字典序排列时，
   返回 true；否则，返回 false。
 * @Tip
   输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
   输出：true
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * @脑补字典序： 比较两个字符串的索引a和b，如果a == b 则比较下一位， 如果 a < b则说明 b的值大于a的值，否则取反；
 */
 var isAlienSorted = function(words, order) {
    //使用map map遍历键和值都超级方便
    let map = new Map();
    //1. 将字典里的字符存入map里
    for (let i=0; i<order.length; i++) {
        map.set(order.charAt(i), i);
    };
    //遍历数组
    for (let a=0; a<words.length - 1; a++) {
        //越界判断，如果当前项的长度不在字典范围内，则跳出本次循环
        if (a == order.length) {
            break;
        }
        if (words[a] == words[a+1]) {
            continue;
        }
        // console.log("words的长度", words[a + 1])
        for (let b=0; b<words[a].length; b++) {
            //判断示例3的情况
            // if (words[a].length > words[a + 1].length) {
            //     return false;
            // }
            //如果遍历 的当前值
            // console.log(words[a+1])
            if (b == words[a + 1].length) {
                // console.log(b, words[a+1].length);
                return false;
            }
            //比较当前和后一项
            //words[a].charAt(b);
            let x = map.get(words[a].charAt(b));
            let y = map.get(words[a+1].charAt(b));
            //比较x，y，如果x > y 则直接返回false, 如果相等，继续比较
            if (x > y) {
                // console.log("1",x, y)
                return false; //前者大于后者, 返回false
            };
            if (x == y) {
                // console.log("2",x, y)
                continue; //相等跳出本地循环
            }  
            if (x < y) {
                break;
            }
            // return true; //前者小于后者，返回true
        }
    }
    return true;
};
const test1 = isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz") //true
const test2 = isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"); //false
const test3 = isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz") //false/
const test4 = isAlienSorted(["app","apple"], "abcdefghijklmnopqrstuvwxyz") //true
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
//运行失败，失败传值 
words = ["kuvp","q"];
order = "ngxlkthsjuoqcpavbfdermiywz";
console.log(isAlienSorted(words, order)); //true
const test5 = isAlienSorted(["hello","hello"], "abcdefghijklmnopqrstuvwxyz") // true
const test6 = isAlienSorted(["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"], "zkgwaverfimqxbnctdplsjyohu") // true
console.log(test5) //false
console.log(test6) //true
const test7 = isAlienSorted(["apple","apple","app"],"abcdefghijklmnopqrstuvwxyz")
console.log(test7); //false