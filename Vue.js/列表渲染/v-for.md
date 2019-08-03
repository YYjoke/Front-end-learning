#### 用v-for把一个数组对应为一组元素

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**

你也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法：

 v-for="item of items“

在v-for中使用对象



可以使用v-for来遍历一个对象的属性

v-for="value in object"

 {{ value }}

data: {
object: {
title: 'How to do lists in Vue',
author: 'Jane Doe',
publishedAt: '2016-04-10'
}
}

