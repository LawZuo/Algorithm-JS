//Buffer 读取文件
const fs = require('fs');

//读取文本文件
fs.readFile("./foo.txt", {encoding: "utf-8"}, (err, data) => {
    console.log(data.toString());
})

//读取图片文件
fs.readFile()