var fs = require("fs");

fs.readFile('nodeJs/src/事件循环/input.txt',function(err,data){
if(err){
    console.log(err.stack);
    return;
}
console.log(data.toString());
});

console.log("程序执行完毕")