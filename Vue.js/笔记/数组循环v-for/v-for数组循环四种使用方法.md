###  v-for和kek的指令使用

###### 1.循环普通数组

```html
<p v-for="(item,i) in list">索引值{{ i }}------内容{{  item }}</p>
```

###### 2.对象数组

```html
<p v-for="user in list">{{user.name}}---{{user.age}}</p>
```

###### 3.循环对象

在遍历对象上键值对的时候，除了有 val  key 在第三个位置还有一个索引

```
<p v-for="(val,key,i) in user">值是：{{val}}---键是：{{key}}---索引是：{{i}}</p> 
```



###### 4.迭代数字

```html
<p v-for="count in 10">这是第{{ count }}次循环</p>
```

如果使用v-for迭代数字的话，前面的count值从1开始











