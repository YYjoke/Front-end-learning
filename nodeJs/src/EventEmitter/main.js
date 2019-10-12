var events = require('events');

var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function linstener1(){
console.log("监听器 listener1 执行")
}

// 监听器2 #2
var listener2 = function listener2(){
console.log("监听器 listener2 执行")
}

// 绑定connerction 事件，处理函数为linstener1
eventEmitter.addListener('connection',listener1);

// 绑定connerction 事件，处理函数为linstener2
eventEmitter.on('connection',listener2)

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个b监听器监听连接事件");

// 处理connection事件
eventEmitter.emit('connection');

// 移除监绑定的linstener1函数
eventEmitter.removeListener('connection',listener1);
console.log("linstener1不再受监听");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个a监听器监听链接事件");

console.log("程序执行完毕")