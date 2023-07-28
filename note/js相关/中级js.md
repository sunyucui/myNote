# 中级
content 
- [Promise](#promise)
- [async/await](#asyncawait)
- proxy
- Reflect
- 深拷贝/浅拷贝
- DOM
- BOM
- 事件
- 浏览器
---
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

## Proxy 
代理，拦截  
`const p = new Proxy(target, handler)`
- target: 要代理的对象，可以使对象，数组，函数，或者另一个代理
- handler 一个对象{} 属性是函数，定义各种代理操作  
### [Proxy实例的方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
### Proxy.revocable()

## Reflect
Reflect对象上有Object/Proxy的默认行为
