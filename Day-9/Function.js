function myfun1() {
  // function definition
  console.log("this is function");
}
myfun1();

function myfun2(a, b) {
  // function definition
  console.log("this is function " + a + " " + b);
}
myfun2("Hello", "hey");

function myfun3(a, b) {
  // function definition
  return a + b;
}
var x = myfun3(10, 20);
console.log(x);

function myfun4() {
  // function definition
  return "hello";
}
var y = myfun4();
console.log(y);

function sayhi(message) {
  if (message) return message;
  else return;
}
console.log(sayhi("HELLO"));
console.log(sayhi()); //undefined

function sayhii(message) {
  if (message) return message;
  else return "No data found";
}
// console.log(sayhii("HELLO"));
console.log(sayhii()); //undefined

function add(a, b) {
  return a + b;
}
console.log(add(5));

function sum() {
  console.log(arguments.length);
}
sum(1, 2); //2
sum(1, 2, 3, 4, 5, 7); //6

// we can also create a function using constructor:
var func = new Function("a", "b", "return a+b");
console.log("function using constructor: " + func(2, 3));

//Anonymous function / function Expression:
var p = function () {
  console.log("This if function Expression");
  return "Hello Friends";
};
console.log(p());

//self invoking
(function () {
  console.log("This is self invoking function");
})();

//function - hoisting
sayHello(10, 20);
function sayHello(a, b) {
  console.log(a + b);
}

// hoisting of Expression function is not possible
// adds(2,3); // not possible
// var adds= function(){
//     console.log(a+b);
// }

// Types of scope:
// 1. Block scope:-- there is no block scope in es5 , but onwards es6 blockl scope is available (let and const)
function scope1() {
  {
    var a = 10;
    console.log(a);
  }
  console.log(a);
}
// console.log(a); // a is not defined
scope1();

// function scope:--
function scope2() {
  var a = 20;
  console.log(a);
}
scope2();
// console.log(a); // a is not defined

function parent() {
  var v1 = 20;
  console.log("Parent scope");
  console.log(v1);
  function child() {
    // var v1= 20;
    console.log("child scope");
    console.log(v1);
  }
  child();
  console.log(v1);
}
parent();

// global scope

// function parent1() {
//     var v1 = 20;
//     console.log("Parent scope");
//     console.log(v1);
//     function child1() {
//       // var v1= 20;
//       console.log("child scope");
//       console.log(v1);
//     }
//     child1();
//     console.log(v1);
//   }
//   parent1();

// function check() {
//   let data = 30; 
//   console.log(data);
// }
// check();
// console.log(data);


// function name(a,b) {
//     return a+b;
// }
// var sums = name;
// console.log(sums(10,5));
// console.log(name(10,5));

// Passing function to a function
function avg(a,b,sum){
    return sum(a,b)/2;
}
function add(a,b){
    return a+b;
}
var result = avg(5,13,add);
console.log("Result is : "+ result);




//function to create objects
function Person(){
    // properties
    this.name="Anshika";
    this.age=20;
    // methods
    this.details=function(){
        return "Name: " + this.name +" Age= "+ this.age;
    };
}
var obj1 = new Person();
console.log(obj1.name);
obj1.name="Anshika Jain";
console.log(obj1.details());