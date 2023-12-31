
// Create WebSocket connection.
// const socket = new WebSocket("ws://localhost:8080");

// // Connection opened
// socket.addEventListener("open", function (event) {
//   socket.send("Hello Server!");
// });

// // Listen for messages
// socket.addEventListener("message", function (event) {
//   console.log("Message from server ", event.data);
// });

/**
 * Reflect
 */
// console.log(Reflect.has(Object, 'assign'))


/**
 * proxy
 */

/**
 * Procy.revocable()
 * 返回一个可以收回代理权的Proxy
 */
// let target = {};
// let handler = {};
// let {proxy, revoke} = Proxy.revocable(target,handler);
// proxy.name='syc';
// console.log(proxy.name);
// revoke();
// console.log(proxy.name)
// TypeError: Cannot perform 'get' on a proxy that has been revoked

/**
 * get操作
 * get:function(target[目标对象]，prop[获取的属性名]，receiver[Proxy|继承Proxy的对象])
 * 拦截取值操作
 */
// const proxy = new Proxy({},{
//     get : function(target, key, receiver){
//         return receiver;
//     }
//  }  
// )
// // d对象本身没有a属性，所以读取d.a的时候，会去d的原型proxy对象找。
// // 这时，receiver就指向d，代表原始的读操作所在的那个对象
// const d = Object.create(proxy);
// console.log(d.a == d)


//函数的链式使用
// var c = 0;
// var pipe = function(value) {
    
//     var queue = [];
//     var proxy = new Proxy({},{
//         // 怎么循环起来的
//         get : function(target,prop) {
//             console.log(c++,prop)
//             if(prop == 'get') {
//                 return queue.reduce((val,fn) => fn(val),value);
//             }
//             queue.push(window[prop]);
//             return proxy;
//         }
//     })
//     return proxy;
// }
//   var double = n => n * 2;
//   var pow    = n => n * n;
//   var reverseInt = n => n.toString().split("").reverse().join("") | 0;
//   console.log(pipe(3).double.pow.reverseInt.get)
  

// 数组负索引
// function createArray(...elements) {
//     let target = [];
//     target.push(...elements);
//     let handler = {
//       get(target, propKey, receiver) {
//           let index = Number(propKey);
//           if(index < 0) {
//             propKey = String(target.length + index);
//           }
//           return Reflect.get(target,propKey,receiver);
//       }
      
//     }
  
//     return new Proxy(target,handler);
//   }
  
//   // let arr = [1, 2, 3, 4];
//   let arr = createArray(1,2,3,4)
//   console.log(arr[-2])

/**
 * async awiat
 */
// function fn1() {
//     return new Promise(res => {
//         setTimeout(() => {res('ok1')},200)
//     })
// }
// function fn2() {
//     return new Promise(res => {
//         setTimeout(() => {res('ok2')},200)
//     })
// }
// async function asyncFn() {
//     const res1 = await fn1();
//     const res2 = await fn2();
//     // const res = await Promise.all([
//     //     fn1(),
//     //     fn2()
//     // ])
//     console.log(res1,res2)
// }
// asyncFn()
/**
 * Promise
 * 状态改变后 由then接收处理
 */

// // 测试值穿透
// Promise.resolve(1)
//     .then(() => {return 2})
//     .then(() => {
//         Promise.resolve(3)
//     })
//     .then(console.log)
// //undefined

// Promise.resolve(1)
//     .then(() => {return 2})
//     .then(() => {return 3})
//     .then(console.log)
// // 3
// Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .then(console.log)
// // 1


// const p1 = 1;
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve('33');
// const p4 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res('4-ok')
//     },5000)
// })
// const p5 = new Promise((res,rej) => {
//     setTimeout(() => {
//         rej('5')
//     },3000)
// })

// Promise.all([p4, p2, p1, p3,p5]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })




// const myPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //reject('sobad')
//         resolve('success');
//     },100)
// }).then((msg) => {
//     console.log(msg)
// },(err) => {
//     console.log(err)
// })


/**
 * 继承的方法
 */
// 原型链继承
//缺点 子类不能给父类传参，属性共享
//  function superType(){
//     this.color = ['red','green']
//  }
//  function a(){}
//  // a--Function.prototype--Object.prototype--null

//  a.prototype = new superType()
//  // a--superType.prototype--Function.prototype--Object.prototype--null
// let instance1 = new a()
// instance1.color.push('blue')

// let instance2 = new a()
// console.log(instance2.color)
//构造函数继承
/**
 * 解决了引用值共享
 * 可以向父类传参
 * 子类不能访问父类中的方法
 */
// function superType(name){
//     this.color = ['red','green'];
//     this.name = name;
//     this.getName = function (){
//         return this.name;
//     }
//  }
//  function a(name){
//     superType.call(this,name)
//  }
//  // a--Function.prototype--Object.prototype--null


// let instance1 = new a("a1")
// instance1.color.push('blue')
// console.log(instance1.getName())
// console.log(instance1.color)
// let instance2 = new a('a2')
// console.log(instance2.getName())
// console.log(instance2.color)
// 组合方法
/**
 * 方法应该共享（原型链） 属性不应该共享（构造函数）
 * 缺点：父类被调用了两次
 * .call  new
 */
// function superType(name){
//     this.name = name;
//     this.color = ['red'];
// }
// //共享的方法放在父类的原型上
// super.prototype.sayName = function () {
//     console.log(this.name)
// }
// function a(name,age){
//     superType.call(this,name)
//     //自身属性
//     this.age = age
// }
// a.prototype = new superType()
//寄生式组合继承
/**
 * 最优方式 
 */
// function superType(name) {
//     this.name = name;
//     this.color = ['red'];
// }

// super.prototype.sayName = function (){
//     console.log(this.name)
// }
// function a(name,age){
//     superType.call(this,name);
//     this.age = age;
// }
// //a -- Function.prototype --Object.prototype -- null
// a.prototype = Object.create(superType.prototype)
// //a -- superType.prototype --Object.prototype -- null
// superType.prototype.constructor = superType
//重写原型会导致constructor的丢失
//class 方式ES6
/**
 * super关键字
 */
// class SuperType{
//     constructor(name){
//         this.name = name;
//     };
//     sayName(){
//         console.log(this.name)
//     }
// }
// class a extends SuperType{
//     constructor(name,age) {
//         super(name);
//         this.age = age;
//     }
// }

/**
 * 类型判断
 * ---打印原型（同时指定this）
 * typeof Array会识别成object
 */
// const myTypeof= function (obj){
//     return Object.prototype.toString.call(obj)
// }
// let a 
// console.log(myTypeof(a))//[object Undefined]
// a = []
// console.log(myTypeof(a)) //[object Array]
// console.log(typeof a) //object
// console.log(typeof null) //object
