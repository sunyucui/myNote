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
改变继承方式的属性
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
