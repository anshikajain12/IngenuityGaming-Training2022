//synchronous behaviour:
// console.log("this is statement-1");
// var r = 0;
// for (var i = 0; i < 10000000000; i++) r += i;
// console.log(r);

// console.log("this is statement-2");

//Asynchronous behaviour:
console.log("this is statement-1");
setTimeout(() => {
  var r = 0;
  for (var i = 0; i < 10000000000; i++) r += i;
  console.log(r);
}, 2000);

console.log("this is statement-2");
console.log("this is statement-3");
console.log("this is statement-4");
console.log("this is statement-5");
console.log("this is statement-6");
