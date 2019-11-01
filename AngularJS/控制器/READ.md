AngularJS控制器

angularJS控制器控制AngularJS应用程序的数据
AngualrJS控制器是常规的JavaScript对象

AngularJs应用程序被控制器控制
ng-controller指令定义了应用程序控制器
控制器是JavaScript对象 由标准的JavaScript对象的构造函数创建


应用解析：
AngualrJS应用程序由ng-app定义 应用程序在<div>中运行
ng-controller=“myCtrl”属性时一个AngularJs指令  用于定义一个控制器

myCtrl函数是一个JavaScript函数
AngualrJS使用$scope对象来调用控制器
在AngualrJS中 $scope是一个应用对象（属于应用变量和函数）
控制器的$scope（相当于作用域，控制范围）用来保存AngualrJS Model（模型）的对象
控制器在作用域中创建两个属性（firstname和lastname）
ng-model指令绑定输入域到控制器的属性（firstname和lastname）

