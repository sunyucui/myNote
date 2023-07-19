console.log("syc")

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

const arr = [1,2,3,4]
const max = Math.max.apply(null, arr)
console.log(max)

