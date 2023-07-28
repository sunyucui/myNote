# 基础JS(语法)

content
- [数据类型](#数据类型)
- [声明方式](#声明方式6)
- [解构赋值](#解构赋值--从模板中取值)
- [控制语句](#控制语句)
- [字符串](#扩展字符串)
- [数组](#扩展字符串)
- [对象](#对象)
- [继承与原型链](#继承与原型链)
- [函数](#函数)
- [类](#class)

---
### 数据类型  
Number String Boolean Null undefined Object Symbol
object(Array function Date Regexp) 
Array.isArray(arr)
Object,prototype.toString.call(arr) 
> js最好不要进a行要求准确度的逻辑运算，会出现精度丢失的问题  
> 用对象的角度  

Error 内置错误对象  
window 全局对象
Math  
- parseInt(str)
  - 遇到非数值字串会停止返回解析过的
  - `+ '043*'` //NaN  +也会转换str-number
- parseFloat(str)  
###  声明方式（6）
`let const var function class import`
含义不同从以下几个角度：赋值+作用域（全局、函数、块级{}）+声明提升+暂时性死区  
### 解构赋值--从模板中取值
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
## 控制语句
### 逻辑运算符的短路原则
- `a||（a=1）`可以消除错误值并指定合法值
  - 等价 `a?a:1`
- `o && o.getName()` 进行检查  

### 循环
- 数组
  - `Array.forEach(fn)` 最好
  - `for(let item of arr)`  for of
- 对象
  - `for(const item in obj)` for in  

### 异常处理语句  

`throw (new Error('The message'));`    
throw 后面的语句将不会输出
try...catch
## 数组
数组的增删改查
- 检测
  - `Object.prototype.toString.call`(arr)
  - `Array.isArray(arr)` [es6]

数组的原生方法(增删改查)
- 增加
  - push() 尾部添加
  - unshift() 头部添加
- 删除
  - pop() 尾部删除
  - shift()头部删除
- 修改
  - splice(a,b,c)   将[a,b]替换成c
- 查找
  - find(()=>{}) 返回true组成的新数组，中间相当于过滤函数
- 排序
  - sort((a,b)=>{a-b}) 指定升降
- 合并 
  - join(str)
  - concat()  

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

## 函数
**函数表达式没有声明提升**
- `const fn = function(){}` 

**闭包就是函数嵌套** 
function a(value){
  this.value = value
  return function (v){
      return v+value
  }
} 
const res = a(1)
const x = res(2) //3
**arguments 类数组 保存函数调用时的所有实际参数index：0开始** 
**剩余参数**  
- function fn(first,...others)
  - 剩余参数将会变成一个参数数组  

**箭头函数**  
- 箭头函数没有this
  - 可以很好的沿用上级的this，解决函数嵌套this不一致的问题  

**立即执行函数（）**  
形式：(匿名函数)（）
```js
(function (){
    ...
})()  
```  
剩余参数（扩展运算符）...val
- function avg(...arg)
- avg.apply(null,[a,b,c])
- avg.call(null,a,b,c)

### 匿名函数
### 闭包的理解
形式
- 函数的嵌套
  - 作用域链
作用/好处
- 减少了全局变量
- 形成隔离（闭包） 外部无法访问（js不能访问内部作用域的变量）
- 函数调用后不会被立即回收，直到没有引用  

## 函数扩展
- 箭头函数 没有this--利于封装回调函数（this固定化）
  - 返回对象时要用()包裹
- 尾调用 函数最后调用另一个函数 如果调用的是自己--尾递归

## 对象
最好用字面量创建
- `const obj = {}`
- const obj = new xx()
  - new 创建了空对象
  - new 指定了this  

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

## 继承与原型链
继承的方式  
- 基于原型链的继承
- 构造函数继承
- 组合继承（构造+原型）
- 寄生式组合继承（构造+原型+Object.create）
- class的extends，super关键字进行继承
--- 
形式：链式结构
对象有一个prototype属性指向自己的原型对象
原型对象的prototype指向原型的原型对象  
一直向上直到Object的原型对象是null
```js
const obj = {} 
//内置constructor和[[Prototype]]
//obj---Object.prototype---null 
Object.getPrototypeOf(obj) //查看原型
Object.setPrototypeOf(obj) //设置原型
obj.hasOwnProperty(a)
Object.hasOwn(obj,a)
```
原型链的好处
- 可以共享属性和方法
  - 放在对象的原型上，对象的实例都可以使用
### 指定原型的方式(继承)
- 创建的时候指定
  - 字面量中用 __proto__指定 
  - 构造函数
  - const a = Object.create(b) b是a的原型
  - class a extent b 
  - a.\_\_proto\_\_ = b
- 之后修改
  - Object.setOwnPropertyOf(a, a_proto)
### 性能
涉及到查找 先查找自身属性再去查找链上的属性  
尽量不要扩展原有的属性

## Map
## Set
## class
> 实例的原型对象是**类**  
构造函数 显示或者隐式调用  

### 方法
- 静态方法(类的方法)
  - `static`修饰
    - 类直接来调用 `Foo.fn()`  this指向类
    - 实例不会继承
    - 子类会继承 `Goo.fn()`
    - 子类内部用`super`调用，可以改写，也必须是静态方法
- 私有方法
  - 私有方法写在外部
  - 私有方法的名字命名为一个`Symbol`值  
  - 方法前加`#`

- 实例上的方法
  - 写在constructor中 
- 原型上的方法
  - 直接在class中定义
### 属性
- 静态属性（类的属性）
  - `static` 修饰的属性，不能被实例引用（this）
- 私有属性
  - `#`属性名 
- 实例上属性
  - 写在头部
  - 写在constructor中   
- 原型上的属性
  - obj.prototype.name='joe'


```js
const bar = Symbol('bar') 
class Foo {
  
  //构造函数
  constructor(){
    /*****写实例上的方法和属性*****/
  }

  /*****写原型上的方法和属性*****/
  name = '' //实例属性
  #age = 18 //私有属性
  static value=1 //静态属性
  //静态方法
  static fn(){}
  sayHello() {
    //私有方法-1，调用外部
    sayHi.call(this)
  }
  //私有方法-2
  [bar](){}
  //私有方法-3
  #sum(){}

}
//继承
class Goo extends Foo {
  //改写父类静态
  static fn() {
    return super.fn()+'1'
  }
}

function sayHi(){}

const foo = new Foo()
```
### new.target
> 确定构造函数是怎么调用的,**在构造函数中使用**   

构造函数可以如何调用？
- `new Foo() ` 
  - `new.target == Foo`
- `Foo.call()` 
  - `new.target == undefined`  

子类继承父类时，new.target会返回子类
- 应用：创建不能被实例化的类，必须继承使用
  - 设置 父类调用自己报错

### class 继承
 - `extends`
 - `constructor`中必须调用`super`来得到父类的this对象，否则继承不成功
   - `super`之前使用this报错，子类是基于父类实例的
- 获取原型方法：`Object.getPrototypeOf(obj)` 

super的this指向
  - super() 作为函数 ***调用super***
    - 代表父类构造函数，返回子类实例（**this指向子类**）== A.prototype.constructor.call(this)
    - 只能**在子类的构造函数**中使用
  - super作为对象 
    - ***用super来调用属性***
       - 静态方法 `this指向父类`的静态属性 A.name
       - 普通方法 `this指向父类原型` A.prototype.name
    -  ***用super来定义属性***
       - 变成`子类实例的属性`，super.x 等同于 this.x
    -  ***用super来调用函数***
       - 父类原型上的方法
       - 方法内部的`this指向子类实例`
       - 在静态方法中 使用super调用父类的静态方法，`this指向子类`（静态的）


__proto__与prototype  
- 对象都有的属性：`__proto__`，得到原型
  -  `__proto__`指向对应的构造函数的属性prototype
- prototype 构造函数的属性，得到原型对象
```js
//若B继承A
B.__proto__ == A //B的原型
//作为对象
//Object.setPrototypeOf(B,A)
//Object.getPrototypeOf(B)==A
B.prototype.__proto__ == A.prototype  //B的原型对象的原型
//作为构造函数
//Object.setPrototypeOf(B.prototype,A.prototype)
//Object.getPrototypeOf(B.prototype)==A.prototype
// B.prototype instanceof A
```
ES6 原生对象可继承  
- Number()
- String()
- Boolean()
- Object()
- Array() 
- Function()
- Date()
- Error()
- RegExp()

## something else
- apply改变this指向，参数是数组形式  
   - apply可以避免循环来遍历数组--参数是数组形式
   - 达成跟扩展运算符一样的效果 但是有参数长度的限制

in运算符
- 返回值boolean 
- 判断对象是否存在某个属性 `if(prop in obj)`
- 数组判断的是索引
- 会检索到原型链上



      
 








