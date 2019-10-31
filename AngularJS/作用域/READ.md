Scope(作用域)是应用在HTML和javascript之间的纽带
Scope是一个对象  有可用的方法和属性
Scope课应用在视图和控制器上

如何使用Scope
当你在AngularJS创建控制器时，你可以将$scope对象当作一个参数传递


当控制器中添加$scope对象时，视图（HTML）可以获取了这些属性
视图中，你不需要添加$scope前缀 只需要添加属性名即可  如｛｛name｝｝

Scope概述
AngularJS应用组成如下：
View(视图) 即HTML
Model（模型）当前视图中可用的数据
Controller（控制器）即JavaScript函数，可以添加或修改属性

scope是模型
scope是一个JavaScript对象 带有属性和方法，这些属性和方法可以在视图和控制器中使用


根作用域
所有的应用都有一个$rootScope 它可以作用在ng-app指令包含的所有HTML元素中
$rootscope可作用于整个应用中，是各个controller中scope的桥梁 用rootscope定义的值  可以在各个controller中使用
