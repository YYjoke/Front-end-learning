v-if    它是用于条件性的渲染一块内容。这块内容只会在指令的表达式返回truthy值的时候被渲染

因为v-if是一个指令  所以它必须添加到一个元素上  如果想切换多个元素，此时可以把一个<template>元素当作不可见的包裹元素，在上面使用v-if 最终渲染结果将不包含<template>

<template>元素本身不可见

​    

v-if="Math.random() > 0.5"

v-else

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别

这就类似于 if   elseif语句





v-show  

根据条件展示元素的选项是  v-show指令

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS 属性 `display`。



当切换频率比较高的使用v-show    运行条件较少的时候   使用







