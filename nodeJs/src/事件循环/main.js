// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmiiter = new events.EventEmitter();

// 创建时间处理程序
var connectHandler = function connected(){
console.log('连接成功');

// 触发 data_received 事件
eventEmiiter.emit('data_received');
}

// 绑定connection 事件处理程序
eventEmiiter.on('connection',connectHandler);

// 使用匿名函数绑定data_received 事件
eventEmiiter.on('data_received',function(){
    console.log("数据接受成功");
})

// 触发connection事件
eventEmiiter.emit('connection');

console.log("程序执行完毕");