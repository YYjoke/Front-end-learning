 <!-- bootstrap 提供了一个清晰的创建表格的布局   bootstrap支持的一些表格元素 -->
 <table>   为表格添加基础样式
 <thead>   表格标题行的容器元素<tr> 用来识别表格列
 <tboby>   表格主体中的表格行的容器元素
 <tr>      一组出现在单行上的表格单元格的容器元素（<td> 或 <th>）
 <td>      默认的表格单元格
 <th>      特殊的表格单元格，用来识别列或行  必须在<thead>内使用
 <caption> 关于表格储存内容的描述或总结


表格类 
.table    为任意<table>添加基本样式 （只有横向分割线）
.table-striped   在<tbody>内添加斑马线形式的条纹
.table-bordered  为所有表格的单元格添加边框
.table-hover     在<tbody> 内的任一行启用鼠标悬停状态
.table-condensed  让表格更加紧凑

<tr><th>和<td>类
.active     将悬停的颜色应用在行或者单元格上
.success    表示成功的操作
.info           表示信息变化的操作
.warning   表示一个警告的操作
.danger     表示一个危险的操作



例：
如果想要一个只有内边距和水平分割线的表格 添加类 .table
如果想要一个只有内边距和外边框的表格 添加类 .table-bordered     或者同时添加两个类  .table   .table-bordered
