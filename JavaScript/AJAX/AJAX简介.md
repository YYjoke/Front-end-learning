### AJAX简介

AJAX是开发者的梦想，因为能够：

- 不刷新页面更新网页
- 在页面加载后从服务器请求数据
- 在页面加载后从服务器接收数据
- 在后台向服务器发送数据  

### 什么是AJAX

AJAX = Asynchronous Javascript  And  XML

AJAX 并非编程语言。

AJAX 仅仅组合了：

- 浏览器内建的XMLHttpRequest对象（从web服务器请求数据）
- JavaScript 和 HTML DOM（显示或使用数据）

Ajax 是一个令人误导的名称。Ajax应用程序可能使用XML来传输数据，但将数据作为纯文本或JSON文本传输也同样常见

Ajax允许通过与场景后面的Web服务器交换数据来异步更新网页。意味着可以更新网页的部分，而不需要重新加载整个页面

### AJAX如何工作

![AJAX](https://www.w3school.com.cn/i/ajax.gif)

1.页面中发生一个事件（页面加载，按钮点击）

2.由JavaScript创建XMLHttpRequest对象

3.XMLHttpRequest对象向web服务器发送请求

4.服务器处理该请求

5.服务器将响应发送回网页

6.由JavaScript读取响应

7.由JavaScript执行正确的动作（比如更新页面）

