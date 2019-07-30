# json简介

**JSON**：JavaScript Object Notation  （JavaScript 对象标记法）

**JSON** ： 是一种存储和交换数据的语法

**JSON**： 是通过JavaScript 对象标记法书写的 

### 交换数据：

当数据在浏览器与服务器之间进行交换时，这些数据只能是文本

JSON属于文本，并且我们能够把任何JavaScript对象转化成JSON 然后将JSON发送到服务器

我们也能把从服务器接收到的任何json转化为JavaScript对象

所以能够把数据作为JavaScript对象来处理

## 发送数据

如果您的数据存储在JavaScript，您可以把对象转化为JSON 然后将其发送到服务器

```html
var myObj = { name:"Bill Gates",  age:62, city:"Seattle" };
var myJSON =  JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
```

## 存储数据

在存储数据时，数据必须是某种具体的格式，并且无论您选择在何处存储它，文本永远是合法格式之一。

JSON 让 JavaScript 对象存储为文本成为可能。

把数据存在本地存储中：

```html
//存储数据：
myObj = { name:"Bill Gates",  age:62, city:"Seattle" };
myJSON =  JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//接收数据：
text = localStorage.getItem("testJSON");
obj =  JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
```

### 什么是JSON：

- json 指的是Java对象标记法（JavaScript object notation）

- json 是一种轻量级的数据交换格式

- json 具有自我描述性且易于理解

- json 独立于语言  

    

  

  json使用JavaScript语法，但是json格式是纯文本的   

  

  文本可以被任何编程语言作为数据来读取和使用

  json格式最初由Douglas Crockford 提出

  ### 为什么使用JSON

  因为 JSON 格式仅仅是文本，它能够轻松地在服务器浏览器之间传输，并用作任何编程语言的数据格式。

  JavaScript 提供內建函数把以 JSON 格式写的字符串转换为原生 JavaScript 对象

  

