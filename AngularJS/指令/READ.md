Angular 通过被称为指令的新属性来扩展HTML
Angular通过内置的指令来为应用添加功能
Angular允许你自定义指令


Angular指令是扩展的HTML属性  带有前缀ng-
ng-app指令初始化一个AngularJS应用程序
ng-init指令初始化应用程序
ng-model 指令把元素值绑定到应用程序


数据绑定：

{{name}}表达式是一个AngularJS数据绑定表达式
AngularJS中的数据绑定，同步了AngualrJS表达式与AngularJS数据

{{name}}是通过ng-model="name"进行同步



ng-repeat指令用在一个对象数组上；


ng-app指令
ng-app指令定义了AngularJS应用程序的根元素
ng-app指令在网页加载完毕时会自动引导应用程序

ng-init指令
ng-init指令
为AngularJS应用程序定义了初始值
通常情况下，不适用ng-init 可以使用一个控制器或模块来代替它

ng-model指令
ng-model指令 绑定HTML元素到应用程序数据
ng-nodel指令也可以：
为应用程序数据提供类型验证（number，email，required）
为应用程序数据提供状态（invaild，dirty，touched，error）
为HTML提供CSS类
绑定HTML元素到HTML表单

ng-repeat指令
ng-repeat指令对于集合中（数组中）的每个项会克隆一次HTML元素

创建自定义的指令
除了AngularJS内置的指令外，我们还可以创建自定义指令
你可以使用directive 函数来添加自定义的指令
要调用自定义指令  HTML元素需要添加自定义指令名
使用驼峰法来命名一个指令，runoobDirective 但在使用它时需要以-分割 runoob-directive


可以通过多种方式来调用调令：
元素名
属性
类名  ：  如果使用类名调用的话  必须设置restrict的值为C 才能通过类名来调用指令
注释  ： 如果使用注释来调用 则必须在该实例上添加replace属性  否则评论是不可见的    restrict的值必须设为M才能通过注释来调用指令

限制使用：
通过 restrict设置值为A来限制只能通过HTML属性调用

restrict值为一下几种：
E作为元素名使用
A作为属性使用
C作为类名使用
M作为注释使用

