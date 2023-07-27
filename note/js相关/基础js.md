# 基础JS
数据类型  
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

逻辑运算符的短路原则
- `a||（a=1）`可以消除错误值并指定合法值
  - 等价 `a?a:1`
- `o && o.getName()` 进行检查  

循环
- 数组
  - `Array.forEach(fn)` 最好
  - `for(let item of arr)`  for of
- 对象
  - `for(const item in obj)` for in  


异常处理语句  

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
## 对象
最好用字面量创建
- `const obj = {}`
- const obj = new xx()
  - new 创建了空对象
  - new 指定了this
### 原型对象(高级)
### 原型链
## 函数
剩余参数（扩展运算符）...val
- function avg(...arg)
- avg.apply(null,[a,b,c])
- avg.call(null,a,b,c)
### 立即执行函数
### 匿名函数
### 箭头函数
### 闭包的理解
形式
- 函数的嵌套
  - 作用域链
作用/好处
- 减少了全局变量
- 形成隔离（闭包） 外部无法访问（js不能访问内部作用域的变量）
- 函数调用后不会被立即回收，直到没有引用
## Map
## Set

## 异步任务--Promise--Generator--async/await
## Promise
promise是一个**对象**，使用.then(callback)完成异步函数调用  
then返回的是一个**新promise对象**  
promise链式调用：.then().then().then()....
- 解决**回调地狱**问题---多重异步操作

async/await 返回的是也是promise对象 是对promise的语法糖
> 语法糖是功能没有改变的更简洁的语法， 源自编译原理  

**三种状态**
- pending 进行中
- 解决
  - fulfilled  成功/兑现
  - rejected 失败  

状态的变化不可逆

``` js
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //reject('sobad')
        resolve('success!')
    },5000)
}).then((msg) => {
    console.log(msg)
},(err) => {
    console.log(err)
})
```  
resolve/reject  
状态改变一次就不会再改变

**静态方法**
``` js
//并发
Promise.all([Promise,Promise,,,])  
 //顺序执行，等待所有都完成返回结果 
 //任意被拒绝则拒绝, 有立即拒绝则立即拒绝
 //场景 多个异步，存在依赖其他异步结果的异步任务
Promise.allSettled()
// 存在拒绝不会立即停止，会等待并返回所有的结果,
// then接收 返回是结果对象数组[{status:fulfilled,value:0}]
// 异步任务彼此不依赖
Promise.race() 
// 任意一个完成/任意一个拒绝
//返回第一个解决

Promise.any() 
//任意一个完成/所有都拒绝
//返回第一个成功
//所有失败才失败
``` 
promise的值穿透  
- 链式调用的参数不是函数值  
## async/await
- async function fn(){}
  - 内部同步执行，遇到await进行异步并中断后面任务
  - await 一旦遇到reject就会中断并return
- 返回的是Promise对象，不是的话会隐形封装
  - async的return作为then的参数
  - async内部抛出错 返回的Promise的状态为reject  
- await 
  - await 只能在async内部使用，并且会中断await后的任务
  - await是then()的语法糖 后面跟着promise
  - 若存在依赖的异步任务，使用all()  await Promise.all()
  - await 123 // return Promise.resolve(123)
- 错误处理机制
  - all()解决 await阻碍有依赖的异步任务
  - try..catch 解决await的错误中断
  - await 后添加catch()解决await的错误中断







