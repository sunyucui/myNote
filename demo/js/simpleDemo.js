console.log("syc")
/**
 * js异常处理
 */
//throw "自定义错误"
function doSomethingErrorProne () {
    if (ourCodeMakesAMistake()) {
      throw (new Error('The message'));
    } else {
      doSomethingToGetAJavascriptError();
    }
  }

  try {
    doSomethingErrorProne();
  }
  catch (e) {
    console.log(e.name); // logs 'Error'
    console.log(e.message); // logs 'The message' or a JavaScript error message)
  }
  
/**
 * 原型链与构造函数
 */
// function text(){}
// console.log(Object)
// console.log(Object.prototype)
// console.log(Object.prototype.prototype)

/**
 * 理解闭包
 * 
 */
// function add(a){
//     return function (b){
//         return a+b;
//     }
// }
// const res1 = add(1)
// console.log(res1(5))
/**
 * 可以缓存值 可以防止错误值-- 空 null undefined NaN false
 * 短路判断
 * 三目运算符
 */
// let a = NaN;
// console.log( a || (a=1))
// console.log( a ? a :1)
/**
 * 一元运算符 + 也可以把数字字符串转换成数值
 */
// const str = '042*'
// const num = + str;
// console.log(str)
//  console.log(num)
//  console.log(parseInt(str))


// let x=1,y=2;
// [x, y] = [y, x]
// console.log(x, y)
// const [a, b, c, d, e] = "hello"
// console.log(a,b,c,d,e)
// const {toString: s} = 123;
// console.log(s)
// const {toString: g} = true;
// console.log(g)

// console.log("String.raw用法")
// let x='syc'
/**
 * 转义不生效
 * 可以显示内插表达式
 * 第一个参数调用点对象  { raw: ['foo', 'bar', 'baz'] }
 */
// console.info(String.raw`Hi\n${x}`)
// console.info(String.raw({ raw: 'test' }, 0, 1, 2, 3, 4))

// 标签模板+模板字符串
// const person='syc',age=25;
// 第一个参数是String数组 可以收集实参中的所有string，剩余的参数可以用于后面的计算表达
// function myTag(strings, personExp, ageExp) {
//     const str0 = strings[0];
//     const str1 = strings[1];
//     const str2 = strings[2];
//     const ageStr = ageExp > 99 ? 'old' : 'young';
//     return `${str0}${personExp}${str1}${ageStr}${str2}`;
// }
// console.info(myTag`Halo ${person} is a ${age}`);

// const arr = [1, 2, 3, 4, 5]
// console.log(...arr) 
// console.log(arr)
// console.log([...arr])

// const arr = [1,2,3,4]
// const max = Math.max.apply(null, arr)
// console.log(max)

