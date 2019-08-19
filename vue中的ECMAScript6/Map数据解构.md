### Map 数据结构

JavaScript的对象（Object）本质上是键值对的集合（Hash结构），但是传统上只能使用字符串作为键，这给它的使用带来了很大的限制。为解决这个问题，ES6提供了Map数据结构。它类似与对象，也是键值对的集合，但其“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键，也就是说，object结构提供了“字符串-值”的对应，Map结构提供了“值-值”的对应，是一种更完善的Hash解构实现。如果需要使用“键值对”的数据解构，Map比Object更合适。

- **如何创建Map**

Map可以接受一个数组作为参数，该数组的成员是一个个表示键值对的数组。

```javascript
const map = new Map([
['name':'张三'],
['title':'Author']
]);
```

- **Map常用属性及方法**

1. size 属性

size 属性返回Map结构的成员总数

```
const map = new Map([
['name':'张三'],
['title':'Author']
]);
```

2. set 和get方法

set方法设置键名key对应的键值为value，然后返回整个Map结构。如果Map已经有对应的键值，则键值会被更新，否则就新生成键值。set方法返回的是当前的Map对象，依次可以采用链式写法

```javascript
const map = new Map([
['name':'张三'],
['title':'Author']
])
map.set('friend',['小花','大花']).set('edition',6)
```

get方法读取key对应的键值，如果找不到key，则返回undefined

```javascript
const map = new Map([
['name':'张三'],
['title':'Author']
])
map.set('friends',['小花','大花']).set('edition',6)

张三
```

3. has 方法

has方法返回一个布尔值，判断某个键是否在当前Map对象之中

4. delete 方法

delete 方法删除某个键，如果删除成功，返回true；如果删除失败，返回false。

5. 遍历方法

Map 结构原生提供3个遍历器生成函数1个遍历方法：

 keys():返回键名的遍历器，

values():返回键值的遍历器，

entries(): 返回所有成员的遍历器，

forEach():遍历Map的所有成员。 

