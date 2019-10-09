// 一、引入require模块

// 使用 require 指令来载入http模块，并将实例化的HTTP赋值给变量http 
var http = require('http');

// 一、创建服务器

// 我们使用http.createServer()方法创建服务器，并使用listen方法绑定8888窗口。函数通过request，response 参数来接收和响应数据。

http.createServer(function(request,response){
    //发送头部
    // HTTP状态值：200 ：OK
    // 内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    // 发送响应数据 "hello world"

    response.end("hello world\n");

}).listen(8888);

// 终端打印如下信息
console.log('运行地址是：http://127.0.0.1:8888/')