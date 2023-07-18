console.log("syc")
/**
 * 1-1 声明方式（6）
 * let const var function class import
 * 含义不同从以下几个角度：赋值+作用域（全局、函数、块级{}）+声明提升+暂时性死区
 */

/**1-2
 * 解构赋值--从模板中取值
 * 生效条件：属性值严格等于undefined，等号右边的值应该会是数组或者对象，不值得话就转换成对象
 * 解构不成功变量的值为undefined
 * undefined和null无法转为对象，因此无法解构
 * 字符串+数值+布尔+对象{}+数组+函数参数（数组+对象）
 *  */ 
let x=1,y=2;
[x, y] = [y, x]
console.log(x, y)
const [a, b, c, d, e] = "hello"
console.log(a,b,c,d,e)
const {toString: s} = 123;
console.log(s)
const {toString: g} = true;
console.log(g)
/**
 * 应用场景
 * 1-变量交换 [x, y] = [y, x]
 * 2-返回函数多个值 const [x, y, z] = func()
 * 3-定义函数参数 func([1,2])
 * 4-提取json数据 const {name,verson} = demoJson
 * 5-定义函数参数的默认值 function func({x=1,y=2}={}){}
 * 6-遍历Map for(let [k,v] of map){}
 * 7-输入模块的制定属性和方法 const {readFlie, writeFile} = require("fs")
 */
/**
 * 扩展：字符串
 */
/**
 * Unicode表示--国际标准字符集，规定了字符所对应的唯一二进制
 * 字符集 不等于 编码规则（utf-8）---存储方式
 * utf-8最少使用8个比特（1字节）来存储
 * 码点：二进制数值
 * 编码规则---字符与二进制进行对应提出的规则（字符编码规则）
 * 
 * 字符串遍历
 * 字符串模板
 * 标签模板
 * String.raw()
 */


