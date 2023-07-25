# CSS
- [选择器](#选择器)（[层叠与继承](#层叠-优先级-继承)）
- 布局
- 盒模型
- 响应式
## css中的函数
- `width: calc(90% - 30px);`
- `transform: rotate(0.8turn)` 只能转换由盒模型定位的元素  
### transform 改变空间坐标以达到元素旋转、缩放、倾斜、平移的效果
## @规则
- `@import 'style2.css'` 引入外部的样式表
- `@media (min-width:300em)` 创建媒体查询
## 选择器
- 全局选择器 `*`
- 元素选择器 `标签名`
- 类选择器 `.`
- ID选择器 `#`
- 标签属性选择器
  - 字符串匹配： 
    - `~='a'` 有这个完整类名的 class='ab'不算 class='a b c'算
    - `|='a'` 类值可以是a
    - `^='a'` 开头
    - `$='a'` 结尾
    - `*='a'` 存在a这个字符
- 伪类和伪元素
  - 伪类：元素的特定状态 `a:link` 一个冒号
  - 伪元素：元素的特定位置 `p::first-line` 两个冒号  
- 关系选择器
## 层叠 优先级 继承
### 继承
改变继承方式的属性 ***全局值***
- inherit 继承父元素
- initial 元素本身的属性初始值
- unset重置，元素如果可以继承就inherit 不能就initial
### 优先级
!important--内联样式--id--类--属性--
## 盒模型(块级元素) 2种
元素 ：  
- 块级元素block  
- 内联元素inline
  - 宽高不生效 padding border生效但会覆盖内联父级元素
  - `display:inline-block` 宽高生效且不覆盖 
    - 可以扩大点击区域`<a> <span>`  

box :  
- margin  
- border(边框是梯形包裹着content，如果content的宽高为0的话，边框存在则边框就是四个三角形拼成的盒子)  
- padding  
- content
- `box-sizing:content-box`（default）标准盒模型
  - width height都指的是content
- `box-sizing:border-box` IE盒模型
  - width height就是box的宽高 
## 溢出
### content的内容超出盒子的大小
`overflow`
- `overflow:visible` default 溢出可见
- `overflow:hidden` 溢出隐藏
- `overflow:scroll` 滚动条总存在
  - `overflow-x:scroll` 横向滚动
  - `overflow-y:scroll` 纵向滚动
  - `overflow: hidden scroll` 两个值时第一个x生效第二个y生效
- `overflow:auto` 溢出自动添加滚动条  
### 溢出=>BFC overflow的默认值被改变也就代表着盒子成为一个块级排版内容，与其他内容相互隔离并且有了尺寸的协调  
### 单个单词断行控制
单词超过盒子 会自动断行，自动断行后如果单词整体还是超出盒子 则存在以下控制
work-break 只控制单个单词的断点
- `work-break:normal` default 英文单词不换行 但是其他语言的文字会换行
- `work-break:break-all` 单个单词整体 全部换行
- `work-break:keep-all` 都不换行
- `work-break:break-word` 自动换行单次自动断行 `（最优）` 结合了overflow-wap

overflow-wap针对行级
- overflow-wap：normal
- overflow-wap: anywhere 自带的断点正常，单词添加断点
- overflow-wap: break-word 同上
- overflow-wap: word-break 取消自带的断点 单词添加断点
## BFC
css渲染，会影响布局，解决：为**定位**和**浮动**创建新的BFC  
- 包含内部浮动
- 排除外部浮动
- 阻止[**外边距重叠**](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) 
## 单位
长度单位
- 绝对单位
  - px像素
  - in英寸
- 相对长度单位
  - em 相对于字体（前提是设置父级） font-size中相对于父级字体，如果嵌套的话 会一层一层的变大，其他相对于自身字体
  - rem 根元素字体大小（要先设置父级） root-em 不会导致嵌套层层变大
  - vw vh 相对于视口 10vw 视口宽度10%
    - 相对于浏览器的布局不会变化
  - 百分比 相对于父级
      - 使用百分比作为元素外边距（margin）或填充（padding）的单位时，值是以包含块的内联尺寸进行计算的，也就是元素的水平宽度。（自身width）
---
deg 度degree（0-360） 以元素中心为参照点 正数顺时针 负数逆时针   

---
- `min-`
- ` max-` 
    - 给`img`设置`max-width`可以在大容器里尺寸不超过图片自身的宽度，也可以也可以在小于自身的容器里相对于他宽度`100%`而达到一个缩小的效果**对其他替换元素也有用**
----
响应式图片  
不应该先载入原始尺寸的图片再缩放，最好先合适的调整尺寸  

---
图片填充盒子的方式
- 图片的大小一定要是设置成相对（百分比）
- `object-fit`
  - `object-fix:cover` 等比例缩放填充盒子可能有一部分被裁减掉
  - `object-fix:contain` 要么宽度全填充 要么高度全填充 可能会留出背景
  - `object-fix:fill` 拉伸图片填充盒子 图片会变形

---
`flex` 或者 `grid` 布局中，默认情况下元素会**被拉伸到充满整块区域**  
图片不会（没有设置相对宽高，否则会强制拉伸）

###表单相关
在一些浏览器中，表单元素默认不会继承字体样式，要自行添加  
表单样式统一 最好：
- box-sizing:border-box
- margin:0
- padding:0 

单独样式化的时候再添加  
### CSS的工具
- 预编译 
  - Sass
- 后编译
---
字体种类： 
- sans-serif 不带装饰
- serif 带装饰
## 布局
normal flow (正常布局流)文本流是html默认的布局方式
- 块级元素
- 内联元素 

布局方式-**改变**文本流的布局方式
- display
  - block  inline  block-inline
  - ***flex*** 弹性布局 定义横向/纵向
  - ***grid*** 网格布局 定义横向+纵向
- float 脱离文本流
- position 
  - static(default)
  - relative
  - absolution
  - fixed
  - sticky
- 表格布局
- 多列布局
