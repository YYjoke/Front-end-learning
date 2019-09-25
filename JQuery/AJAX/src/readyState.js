var xhr = new XMLHttpRequest()
console.log(xhr.readyState)

// = > 0
// 初始化 请求代理对象

xhr.open('GET','../php/txt.php')
console.log(xhr.readyState)

// = > 1
// open方法已调用，建立一个与服务端特定端口的链接