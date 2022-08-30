// //ES5 Variables:
// var a=10; // global as well as local scope
// {
//     b=20;
//     console.log(b);
// }
// console.log(b);

// //ES6 variables:
// //let, const
// //Block scope
// {
//     let c=100;
//     console.log(c);
// }
// 
// console.log(c); // c is not defined
// //here c is a block variable its accessibility is only inside the block

// const session=20;
// console.log(session);
// session=30;
// console.log(session);







//Arrow Function:
const sayHi=()=>console.log("This is an arrow function");
sayHi();
const add=(x,y)=>x+y;
console.log(add(2,3));
const multi=(x)=>x*x;
let reswult= add(15,multi(10));
console.log(reswult);