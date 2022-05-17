/**
 * web服务器:当应用程序需要某个资源时，可以向一台服务器，
 * 通过http请求获取到这个资源；提供资源的这个服务器，就是一个web服务器
 * 开源服务器：Nginx，Apache，Node.js
 */
const http = require('http');
const url = require('url');

//服务器连接成功，开启此通道
const server1 = http.createServer((request, response) => {
    // console.log(request.url, request.method, request.headers);
    // response.end("Hello World, server1");
    let pathname = url.parse(request.url);
    console.log(pathname);
    if (pathname.pathname == "/login") {
        //获取body里的数据
        request.setEncoding('utf-8'); //接收字符串 默认会接收数据流
        request.on('data', (data) => {
            const { test } = JSON.parse(data)
            console.log(test);
        })
        //响应
        // response.statusCode = 200;
        // response.setHeader("Content-Type", "text/plain;charset=utf8")
        // response.writeHead(200)
        response.writeHead(200, {
            "Content-Type": "text/plain;charset=utf8"
        })


        response.end("欢迎登录")
    } else if (request.url == 'home') {
        response.end("home页")
    } else {

        response.end("错误")
    }

    //request对象: 封装了客户端传递给服务器的信息
});
//创建服务器的方式2
// const server2 = new http.Server((request, response) => {
//     response.end("Hello World, server2");
// })

//不要写1024以下的接口
server1.listen(8001, '0.0.0.0', () => {
    console.log("服务器请求成功")
}); 
 
