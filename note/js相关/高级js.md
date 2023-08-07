# 高级Js 
- 模块化
- webWorker
- webSocker

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
## Module模块化
- 运行时加载的模块方案
  - CommonJs 用于服务器 （对象--可被引用）   
    - `require('fs')` nodejs的方法
  - AMD 用于浏览器
- 静态加载 -编译加载 ES6方案
- CommonJS 模块输出的是一个`值的拷贝`(输出的是值的缓存)，ES6 模块输出的是`值的引用` (变量绑定其所在的模块)
- `import(medthName)` 运行时加载
  - 返回promise对象
  - 可以在任何地方使用 -- 按需加载
- import命令
- export命令
### 严格模式
ES6 的模块自动采用严格模式
- 禁止this指向全局对象
### import()
```js
// 运行时加载
import('moduleA').then(...);
// 加载多个
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module1, module2, module3]) => {
   ···
});
```
### import
```js
import { firstName, lastName, year } from './profile.js';
import { lastName as surname } from './profile.js';
// import语句是 Singleton 模式 同一实例加载一次
// 加载整体
import * as circle from './circle';

```
### export
```js
// 1-
export var firstName = 'Michael';
// 2-
var lastName = 'Jackson';
export { lastName};
// 3-
var n = 1;
export {n as m}; //m别名

// 其他模块加载该模块时，import命令可以为该匿名函数指定任意名字 export-default.js
export default function () {
  console.log('foo');
}
// 模块继承
export { area as circleArea } from 'circle';
// const声明的常量只在当前代码块有效 模块化可以使const跨模块使用
export const A = 1;
```
## Module加载
- js脚本默认同步加载
  - 可能会堵塞其他
- js异步加载方式 加载外部js先去下载，同时不会阻塞下面的执行
  - defer `<script src="path/to/myModule.js" defer></script>`
  - async `<script src="path/to/myModule.js" async></script>`
- 下载完执行
  - defer 整个页面渲染完执行
  - async 一旦下载就执行 可能会中断渲染
- type="module"的`<script>`，都是异步加载, 相当于defer属性
- 利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中。`const isNotModuleScript = this !== undefined;`