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

/**
 * @question 387. 字符串中的第一个唯一字符
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 * @tip
 * 输入: s = "leetcode"
   输出: 0
 */
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
     //越界判断
     if (s == "") {
         return -1;
     }
    //使用map对象 记录出现过的次数
    let map = new Map();
    for (let i = 0; i<s.length; i++) {
        //获取当前的值
        let current = s.charAt(i);
        console.log(current, "记录的当前值")
        //判断当前值是否存在
        if (map.has(current)) {
            //如果存在，获取对应的数值
            let number = Number(map.get(current)) + 1;
            console.log("取出的值", number);
            //更新
            map.set(current, number)
        } else {
            //不存在
            map.set(current, 1);
        }
    }
    console.log("map", map);
    //遍历map,返回第一个出现1的key值
    let law = -1;
    map.forEach((value, key) => {
        if (law !== -1) {
            return;
        } else {
            if (value == 1) {
                console.log("找到了", value, key)
                console.log(s.indexOf(key));
                // return s.indexOf(key);
                law = s.indexOf(key);
            }
        }
        
    })
    return law;
};
// let test = firstUniqChar("a");
// console.log(test);
var canConstruct = function(ransomNote, magazine) {
    //使用map标记值在字符串里出现的次数
    // let map1 = new Map();
    // let map2 = new Map();
    // let left = ransomNote.length, right = magazine.length;
    //越界判断
    if (ransomNote.length > magazine.length) {
        return false;
    };
    let Fun = function(str) {
        console.log("传进来的str", str)
        let map = new Map();
        for (let i = 0; i < str.length; i++) {
            let num = str.charAt(i); //获取当前值
            if (map.has(num)) {     //判断当前键是否存在map中
                let value = map.get(num) + 1; //获取map中的值,累加
                map.set(num, value); //更新map
                // map.num = map.num + 1;
            } else {
                // map[num] = 1; //不存在，则添加
                map.set(num ,1);
            }
        }
        console.log("处理后的str", map)
        // map = {};
        return map;
    }
    let min = Fun(ransomNote), max = Fun(magazine);
    // let max = Fun(magazine);
    let law = 0;
    while (law < ransomNote.length) {
        let cur = ransomNote.charAt(law);
        if (!max.has(cur)) {
            return false;
        } else {
            if (min.get(cur) > max.get(cur)) {
                return false;
            }
        }
        law++;
    }
    return true;
};