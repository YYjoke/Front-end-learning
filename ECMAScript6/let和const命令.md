### let命令



1.ES6 新增了let命令，用来声明变量。 它的用法类似于var 。但是声明的变量只在let命令所在的代码块内有效

所以let和var相比来说   就类似于  let是私有变量    var 是全局变量

2.使用let声名的变量作用域不会被提前。 在原始的js中  var可以先使用再声明  系统只会提示 undefined

但是再ES6中  如果先使用在进行声明系统就会直接报错 （var会进行变量提升 系统会认为语句中拥有这个值  只不过是钱在执行之前没有给他赋值而已-------变量提升）

这样作用域就会很局限   所以拥有let声明变量的语句只能执行在let声明之后

3.相同作用域下不允许声明相同的变量（不允许重复声明）

4.for 循环中的 父子作用域

 <button>按钮</button>

​    <button>按钮</button>

​    <button>按钮</button>

​    <button>按钮</button>

​    <button>按钮</button>

   var btns = document.querySelectorAll('button')
//     for(var i = 0; i<=btns.length;i++){
//         btns[i].onclick=function(){
// console.log("这是第" + i + "个按钮---使用var声明")
//         }
//     }
    for(let j = 0; j<=btns.length;j++){
        btns[j].onclick=function(){
console.log("这是第" + j + "个按钮---使用let声明")
        }
    }
    
    

解释：为什么使用var打印出来的回时同一个内容  而且还都是最后一个按钮的i值

因为for是同步操作   而for内的函数是异步操作 但函数执行到i的时候  如果找不到i的值  就会往上继续找

而let则是因为不同作用域内不能相互引用 所以只能打印当前值



### const命令

const用于声明一个只读的常量 一旦声明  常量的值就不能改变

基本用法与let类似（ 不可重复声明）

const foo ={}

foo.prop=123

代码中的foo存储的是一个地址  这个地址指向一个对象 不可变的只是这个地址  既不能把foo指向另一个地址 但对象本身是可变的 所以依然可以为其添加新得属性

const a=[]

a.push("hello")

常量a是一个数组  数组本身是可写的  但是不能将另一个数组赋值给a  



注意：let const命令的使用场景： const 一般是需要一个模块的时候用或者定义一些全局常量时使用 。而let限制了变量的作用域 保证变量不会去影响全局变量   所以尽量将var 改为let