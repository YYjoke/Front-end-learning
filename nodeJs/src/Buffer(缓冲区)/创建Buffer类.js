// 创建一个长度为10 且用0填充的buffer
const buf1 = Buffer.alloc(10);

// 创建一个长度为10, 且用0*1 填充的buffer
const buf2 = Buffer.alloc(10,1);

// 创建一个长度为10 且未初始化的buffer
// 这个方法比调用buffer.alloc()更快
// 但返回的buffer实例可能包含旧数据
// 因此需要使用fill()或write()重写
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含[0*1，0*2，0*3]的buffer
const buf4 = Buffer.from([1,2,3]);

// 创建一个包含UTF-8字节[0*74，0*c3，0*a9,0*73，0*74]的Buffer
const buf5 = Buffer.from('test');

// 创建一个 Latin-1字节[0*74，0*e9,0*73，0*74]的Buffer
const buf6 = Buffer.from('test','latin1')

console.log(buf1)