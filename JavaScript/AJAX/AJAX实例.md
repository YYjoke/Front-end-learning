### 实例

html页面

```
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>让 AJAX 更改这段文本</h2>
  <button type="button" onclick="loadDoc()">更改文本</button>
</div>

</body>
</html> 
```

这张HTML页面中包含一个<div>和一个<button>。

 <div>用于显示来自服务器的信息

<button>调用函数（当他被点击的时候）

改函数从web服务器请求数据并显示它；

```javascript
Function loadDoc()

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
} 
```

