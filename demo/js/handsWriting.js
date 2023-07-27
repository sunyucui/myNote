
/**
 * Promise
 * 状态改变后 由then接收处理
 */
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