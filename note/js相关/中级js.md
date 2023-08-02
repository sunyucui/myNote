# 中级
content 
- [Promise](#promise)
- [async/await](#asyncawait)
- [proxy](#proxy)
- [Reflect](#reflect)
- 深拷贝/浅拷贝
- [DOM](#dom文档对象模型)
- BOM
- [事件](#事件处理)
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

## DOM(文档对象模型)
 形式：节点树（页面），提供API来处理DOM节点  
 HTML文档  基本单位是标签  
 DOM文档模型提供操作文档的API  
 DOM节点--树的组成单元  node对应标签，对应js对象
 DOM树  节点父子关系连接形成树结构    
### 节点，节点类型，节点类  
- 节点类型 node.nodeType可以获取
  - 元素节点
  - 文本节点
  - Document节点
  - 注释节点   

节点类继承关系：
- a---HTMLAnchorElement---HTMLElement---ELement---Node---EvenTarget
- HTMLAnchorElement 
  - `a.target  a.download ` 
- HTMLElement
  - `title  hidden click()  `
- Element
  -  `tagName  className  getAttribute() setAttribute()  `
- Node
  - `nodeType appendChild() removeChild()`  
- EvenTarget 
  - `继承了事件相关`  
### 节点操作-不改变dom结构
#### DOM的搜索查询
- （推荐） document/element.querySelector(CSSSelector)/querySelectorAll(CSSSelector)
  - 返回结果是静态的
  - 类型是Node
- document 
   - document.getElementById()
   - document.getElementsByName()
   - 类型是Element
- document/element.getElementsByTagName() 类型是Element
- document/element.getElementsByClassName() 类型是Element
#### 特性和属性
Attribute
- elem.getAttribute('attrName')
- elem.setAttribute('attrName','attrValue')
- elem.hasAttribute('attrName')
- elem.removeAttribute('attrName')
- data-name-name2 自定义属性
  - elem.dataset.nameName2
#### 类和样式
- elem.style.color='red'
#### 位置和尺寸
### 节点操作-改变dom结构
#### 插入
- parentNode.append(...node) 父级
- parentNode.prepend()  父级
- node.before() 同级
- node.after() 同级
- (传统) parentNode.appendChild(node)
- (传统) parentNode.insertBefore(node,nextNode)
#### 删除
- node.remove()
- (传统) node.parentNode.removeChild(node)
#### 替换
- node.replaceWith(otherNode)
- (传统) parentNode.replaceChild(newNode,node)

## 事件处理
事件流： 元素上可以定义事件，元素嵌套，事件也嵌套产生。  
3阶段事件流： **1**事件捕获（外部到目标）--> **2**目标阶段 -->  **3**事件冒泡（目标到外部）
***    
3种事件处理函数方式：
- HTML特性 
  - `<div onclick="func()">` 
  - 是处理函数的调用
  - `node.click = function(event) {func()}`
  - 在特性中事件变量是event 不能写成e
- DOM0级事件
  - `div.onclick = func(e){}`
  - 函数赋值
- DOM2级事件（**推荐**）
  - `div.addEventListener(event, handler,capture)`
  - capture:true/false 是否在捕获阶段响应
  - `div.removeEventListener(event, handler)` handler必须是同一个函数体
***
事件对象 event
- 取消事件默认行为 `event.preventDefault()`
- 停止继续向上冒泡 `event.stopPropagation()`
- 停止继续向上冒泡和其他处理函数 `event.stopImmediatePropagation()`
- 事件目标 `event.target`
- 事件当前目标 `event.currentTarget`
- 事件类型 `event.type`  
***
### 各种事件
- 鼠标事件
- 键盘事件
- 资源事件
***
鼠标事件  
点击
- `click` 点击
- `contextmenu` 右击（默认行为是显示右击菜单）
- `mousedown` 按下
- `mouseup` 抬起

移动
- `mouseenter/mouseleave`
- `mouseover/mouseout`
- `mousemove ` 

坐标
- `event.pageX/pageY` -- 相对于文档的坐标。
- `event.clientX/clientY` -- 相对于窗口的坐标。
- `event.screenX/screenY` -- 相对于屏幕的坐标，较少使用
***
资源事件--页面的生命周期
- DOMContentLoaded DOM构建完
- load 页面加载完，此时操作都是安全的
- beforeunload 打算离开
- unload 已经离开
- onload事件 资源加载完毕
***
### 表单操作
## BOM浏览器对象模型
window全局对象 不同tag之间不共享 js全局作用域的属性和方法会写到window中
- Location
- History
- Screen
- Navigator
- document
