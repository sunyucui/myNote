# HTML
`<canvas>`
`<a>`
form
table
> html5  

> 语义化标签可以顾名思义  
使用的场景：
>  - 开发者=>易读易开发
> - 有利于SEO（搜索引擎优化）
> - 有利于屏幕阅读器--无障碍
## [经典问题](#小题目)
## 元素 标签 内容
### 替换元素
- `<img>` 最好使用语义容器--`<figure>`
- `<video>` 视频
- `<audio>` 音频
```html
<figure>
    <img/>
    <figcaption>some description</figcaption>
</figure>
```
### 语义化标签
专用标签--用于网页架构
- 页眉 `<header>`
- 导航栏 `<nav>`
- 主内容 `<main>`
- 侧边栏 `<aside>`
- 页脚 `<footer>`

***
文本格式进阶
- 描述列表
- 引用
- 缩略语
- 联系方式
- 上下标
- 代码块
- 时间和日期
## 超链接
属性值
- `download` href指向的是下载的资源，download来指定下载资源的
- `title` 悬停提示
- target 链接打开的位置
  - target:_self | _top | _parent
  - target: _blank 新标签或者新窗口打开
## [多媒体](#替换元素)
## 嵌入技术
`<iframe>` 
- 存在单击劫持 
  - 自己的网页被嵌入，会诱导用户窃取敏感信息
  - 解决方法：
    - 使用https协议
    - 使用沙河属性 sandbox
`<embed>`
## 响应式图片
用户的浏览器有不同分辨率的图片可使用，根据不同设备屏幕大小载入何事的图片  
位图：用像素网格来定义，可包含很多细节png jpg gif  
矢量图：用算法来定义svg  
如何实现？
```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```
像 WebP 和 AVIF 等新型图片格式可以做到高质量的同时保持较低的文件大小
## html表格
table只用来表示表格数据，不要用来做页面布局
- 不利于屏幕阅读器
- 产生很多标签
- 不能自动响应
## 小题目 
20
### DOCTYPE
是html的文档声明，用来指定浏览器使用标准模式来解析文档，否则将会用怪异模式
**扩**
- 浏览器的解析模式
  - 标准模式(按照w3c标准) 
  - 怪异模式（用来兼容旧版本）
- HTML版本
  - `<!DOCTYPE html>` 指定html5
  - `HTML5`不基于`SGML`，所以不需要引用`DTD`。在`HTML4`中，`<!DOCTYPE>`声明引用`DTD`，因为`HTML4`基于`SGML`。`DTD`规定了标记语言的规则，这样浏览器才能正确的呈现内容。
### 语义化的理解
语义化就是指标签可以顾名思义，像表示结构的，表示不同用途的标签，  
好处就是：对于开发者来说，方便开发和维护，减少差异化；对于用户来说，有利于屏幕阅读器，实现用户的无障碍化；对于浏览器来说，有利于所有搜索引擎优化SEO，易于网页排名和爬虫。
### src与href
是什么+用于什么+请求时不同的动作  
都用来请求外部资源  
src(source)
- 用于img video audio script，
- 资源会嵌入标签位置 
- 请求时会暂停其他资源直至加载-编译-执行完毕

href(hyper reference-超链接) 
- 用于 a link 
- 指向网络资源
- 下载不会阻碍其他处理动作
### title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别
### 什么是严格模式与混杂模式
### 前端页面有哪三层构成，分别是什么
### iframe的作用以及优缺点
### H5和HTML5区别
### 行内元素和块级元素分别有哪些？有何区别？怎样转换？
### label的作用是什么？是怎么用的？
### 对于Web标准以及W3C的理解
### 知道什么是微格式吗？谈谈理解，在前端构建中应该考虑微格式吗
### HTML5新增了哪些新特性？移除了哪些元素
### 怎么处理HTML5新标签兼容问题
### 如何实现在一张图片上的某个区域做到点击事件
### a元素除了用于导航外，还有什么作用
### 你知道SEO中的TDK吗
