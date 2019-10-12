var fs = require('fs');

fs.readFile('nodeJs/src/事件循环/input.txt',function(err,data){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log("程序执行完毕")

// 以上程序中fs.readFile()是异步函数用于读取文件。如果在读取文件的过程中发生错误，
// 错误err对象就会输出错误信息。如果没有发生错误，readFile()跳过err对象的输出，文件内容就容易通过回调函数输出

