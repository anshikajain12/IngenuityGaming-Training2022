//Arithmetic operator
var a = 10;
var b=20;
var c= a+b;
var d = a-b;
var e= a/b;
var f= a*b;
var g= a++;
var h= b--;
console.log(c+" "+d+" "+e+" "+f+" "+g+" "+h+" ")

//Relational operator

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a!=b);
a="20";
//Logical operator
var result = "Hello" && (a!=b);
console.log(result);
var result1 =  "Hello"|| (a!=b);
console.log(!result1);
// Assignment operator

// ternary operator
result = (a!=b)? "This is True" : "This is false";
console.log(result);

// hoisting
x=10;
console.log(x);
var x;