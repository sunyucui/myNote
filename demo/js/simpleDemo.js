console.log("syc")



// var person = {
//   name: 'syc'
// }

// var proxy = new Proxy(person, {
//     get: function(target, propKey){
//         // if(propKey in target) {
//         //   return target[propKey];
//         // } else {
//         //   throw new ReferenceError('Prop name: ' + propKey + 'does not exit')
//         // }
//         return propKey in target ? target[propKey] :  new ReferenceError('no exit')
//     }

// })
// // proxy代理了person
// console.log(proxy.name)
// console.log(proxy.age) //抛出指向错误

/**
 * class
 */
// class A{
//   constructor() {
//     //构造函数里的类实例上的方法
//     this.x = 'aa-x';
//     this.y = 'aa-y';
//     console.log('A-constructor',this.x, new.target.name)
//   }
//   static n = 'aa-n'
//   static fn(msg) {
//     console.log('static-a',msg,this.n)
//   }
//   fn(msg) {
//     console.log('fn-a',msg,this.x)
//   }

//   //原型上的方法
//   getX() {
//     //被子类调用 this指向子类的实例中的属性 x
//     return this.x;
//   }
//   getY() {
//     //被子类调用 this指向子类的实例中的属性 y 但是子类没有则从原型上找
//     return this.y;
//   }
//   getZ() {
//     return this.z
//   }
// }
// //原型上的属性
// A.prototype.z = 'aa-z'
// class B extends A{
//  // x = 'bb-x';
//   constructor() {
//     super() //调用父类的构造函数返回子类实例的this,super之前不能有this,没有的属性去原型上找
//     this.x = 'bb-x';
//     //this.y = 'bb-y';
//     console.log('B-constructor', super.z,this.z) //aa-z
//    // console.log(super.getX())//aa 调用父类原型对象的方法
//   }
//   //静态属性-类的属性
//   static n = 'bb-n'
  
//   static fn(msg) {
//     console.log(super.n)
//     super.fn(msg)
//   }
//   fn(msg) {
//     super.fn(msg)
//   }

//   get xx() {
//     // x定义在了父类的实例上，super指向父类的原型 所以获取不到
//     return super.getX() //undefined
//   }
//   get yy() {
//     // x定义在了父类的实例上，super指向父类的原型 所以获取不到
//     return super.getY() //undefined
//   }
//   get zz(){
//     super.z = 'bb-z' //设置了子类实例z，但调用的时候还是父类原型的z
//     console.log(super.z,this.z) 
//     return super.getZ()
//   }
// }

// const a = new A(); //a--A.prototype--Object.prototype--null
// const b = new B(); //b--B.prototype---A.prototype--Object.prototype--null
// A-constructor A
// A-constructor B
// console.log(b.xx) // bb-x
// console.log(b.yy) // aa-y
// console.log(b.zz) // bb-z


// A.fn('msg:A-class');//static-a msg:A-class
// a.fn('msg:a-instance');//fn-a msg:a-instance
// B.fn('msg:B-class');//static-a msg:B-class
// b.fn('msg:b-instance');//fn-a msg:b-instance

// console.log(B.__proto__ == A) //A
// console.log(B.prototype.__proto__ == A.prototype)
// console.log(B.prototype==A)

// console.log(B instanceof A)
// console.log(B.prototype instanceof A)

/**
 * js异常处理
 */
//throw "自定义错误"
// function doSomethingErrorProne () {
//     if (ourCodeMakesAMistake()) {
//       throw (new Error('The message'));
//     } else {
//       doSomethingToGetAJavascriptError();
//     }
//   }

//   try {
//     doSomethingErrorProne();
//   }
//   catch (e) {
//     console.log(e.name); // logs 'Error'
//     console.log(e.message); // logs 'The message' or a JavaScript error message)
//   }
  
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

