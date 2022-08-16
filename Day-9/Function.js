function myfun1(){    // function definition
    console.log("this is function");
}
myfun1();

function myfun2(a,b){    // function definition
    console.log("this is function "+a+" " +b);
}
myfun2("Hello", "hey");


function myfun3(a,b){    // function definition
    return a+b;
}
var x = myfun3(10,20);
console.log(x);

function myfun4(){    // function definition
    return "hello";
}
var y = myfun4();
console.log(y);

function sayhi(message){
    if(message) return message;
    else return;
}
console.log(sayhi("HELLO"));
console.log(sayhi()); //undefined

function sayhii(message){
    if(message) return message;
    else return "No data found";
}
// console.log(sayhii("HELLO"));
console.log(sayhii()); //undefined

function add(a,b){
    return a+b;
}
console.log(add(5)); 


function sum(){
    console.log(arguments.length);
}
sum(1,2); //2
sum(1,2,3,4,5,7);  //6


// we can also create a function using constructor:
    var func = new Function("a" , "b" , "return a+b");
    console.log("function using constructor: "+ func(2,3));

//Anonymous function / function Expression:
var p = function(){
    console.log("This if function Expression");
    return "Hello Friends";
};
console.log(p());

//self invoking
(function(){
    console.log("This is self invoking function");
})();

//function - hoisting
sayHello(10,20);
function sayHello(a,b){
    console.log(a+b);
}

// hoisting of Expression function is not possible
// adds(2,3); // not possible 
// var adds= function(){
//     console.log(a+b);
// }

