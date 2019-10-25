// events 模块只提供了一个对象：events.EventEmitter   EventEmitter的核心就是事件触发与事件监听器功能的封装
// 可以通过require（”events“）来访问改模块

// 引入events模块
// var events = require('events');
// 创建eventEmitter 对象
// var eventEmitter = new events.EventEmitter();

// 以上两步可以简化为一步

var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some_event', function () {
    console.log("some_event 事件触发")
});

setTimeout(function () {
    event.emit('some_event')
}, 5000)

// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter支持若干个事件监听器
// 当事件触发时，注册这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递

var events2 = require('events');

var emitter2 = new events2.EventEmitter();
emitter2.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
})
emitter2.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2)
})

emitter2.emit('someEvent', 'arg1参数', 'arg2参数')















