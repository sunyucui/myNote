# 高级Js 
模块化
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
## 内存泄漏问题
产生的原因
- 对象循环引用
- 定时器未清除
- DOM元素未及时删除
- 闭包不正确使用
- 全局变量未清除
- 事件未解绑
- 大量数据未及时清理
- 使用第三方库
## 并发模型与事件循环 eventloop
事件循环就是先执行完全部同步任务在执行任务队列中异步任务的回调
- 同步任务
  - 主线程执行
- 异步任务：先执行完所有的微任务再执行一个宏任务
  - 微任务
    - promise MutationObserver
  - 宏任务
    - 定时器
    - IO
    - UI渲染
## js的进程