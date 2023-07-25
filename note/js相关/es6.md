# ES6     
- 深拷贝浅拷贝
- await async
- 数组的方法
-
## 1-1 声明方式（6）
`let const var function class import`
含义不同从以下几个角度：赋值+作用域（全局、函数、块级{}）+声明提升+暂时性死区


## 1-2   解构赋值--从模板中取值
生效条件：属性值严格等于`undefined`，等号右边的值应该会是数组或者对象，不值得话就转换成对象
解构不成功变量的值为`undefined`
`undefined`和`null`无法转为对象，因此无法解构
字符串+数值+布尔+对象{}+数组+函数参数（数组+对象）
      
   
### 应用场景
1-变量交换 `[x, y] = [y, x]`  
2-返回函数多个值 `const [x, y, z] = func() ` 
3-定义函数参数 `func([1,2])`  
4-提取json数据 `const {name,verson} = demoJson`  
5-定义函数参数的默认值 `function func({x=1,y=2}={}){}`  
6-遍历Map `for(let [k,v] of map){}`  
7-输入模块的制定属性和方法 `const {readFlie, writeFile} = require("fs")`       
       
## 扩展：字符串     
       
`Unicode`表示--国际标准字符集，规定了字符所对应的唯一二进制  
字符集 不等于 编码规则（utf-8）---存储方式  
utf-8最少使用8个比特（1字节）来存储  
码点：二进制数值  
编码规则---字符与二进制进行对应提出的规则（字符编码规则）  

字符串遍历  
字符串模板-模板字符串 反引号``可以有插值表达式，可使用转义  
可以做函数调用不用写()  
标签模板  
`String.raw(Object,...param)`  

`String.fromCodePoint()`：返回码点对应字符  

`codePointAt()`：返回字符对应码点(String.fromCodePoint()的逆操作)  
`normalize()`：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode正规化)  
`repeat()`：把字符串重复n次，返回新字符串  
`matchAll()`：返回正则表达式在字符串的所有匹配  
`includes()`：是否存在指定字符串  
`startsWith()`：是否存在字符串头部指定字符串  
`endsWith()`：是否存在字符串尾部指定字符串  


## 对象相关扩展
- `super`关键字：指向当前对象的原型对象(只能用在对象的简写方法中method() {})  
- `Object.is()`：对比两值是否相等  
- `Object.assign()`：合并对象(浅拷贝)，返回原对象  
- `Object.getPrototypeOf()`：返回对象的原型对象  
- `Object.setPrototypeOf()`：设置对象的原型对象  
- `__proto__`：返回或设置对象的原型对象  
  
### 描述：自身、可继承、可枚举、非枚举、Symbol  
### 遍历  
- `for-in`：遍历对象自身可继承可枚举属性  
- `Object.keys()`：返回对象自身可枚举属性键组成的数组  
- `Object.getOwnPropertyNames()`：返回对象自身非Symbol属性键组成的数组  
- `Object.getOwnPropertySymbols()`：返回对象自身Symbol属性键组成的数组  
- `Reflect.ownKeys()`：返回对象自身全部属性键组成的数组  

首先遍历所有数值键，按照数值升序排列   
其次遍历所有字符串键，按照加入时间升序排列  
最后遍历所有Symbol键，按照加入时间升序排列
## 数组扩展
- 扩展运算符(...)：转换数组为用逗号分隔的参数序列([...arr]，相当于rest/spread参数的逆运算)  
- Array.from()：转换具有Iterator接口的数据结构为真正数组，返回新数组 

  - 类数组对象：包含length的对象、Arguments对象、NodeList对象
  - 可遍历对象：String、Set结构、Map结构、Generator函数


 - Array.of()：转换一组值为真正数组，返回新数组
 - copyWithin()：把指定位置的成员复制到其他位置，返回原数组
 - find()：返回第一个符合条件的成员
 - findIndex()：返回第一个符合条件的成员索引值
 - fill()：根据指定值填充整个数组，返回原数组
 - keys()：返回以索引值为遍历器的对象
 - values()：返回以属性值为遍历器的对象
 - entries()：返回以索引值和属性值为遍历器的对象
 - 数组空位：ES6明确将数组空位转为undefined(空位处理规不一，建议避免出现)
## 函数扩展
- 箭头函数 没有this--利于封装回调函数（this固定化）
  - 返回对象时要用()包裹
- 尾调用 函数最后调用另一个函数 如果调用的是自己--尾递归
## 数据类型(7)
- undefined
- null
- String
- Number
- Boolean
- Object(Array Function Date RegExp Error)
- Symbol
## something else
- apply改变this指向，参数是数组形式  
   - apply可以避免循环来遍历数组--参数是数组形式
   - 达成跟扩展运算符一样的效果 但是有参数长度的限制



      
 
