//string literals
var str1= "Hello World";
var str2= 'Hello world';
var str3= "This is Gaming's Trsining";
console.log(str1);
console.log(str2);
console.log(str3);
//using constructor
var str= new String("This is string using constructor");
console.log(str);


for (const ch of str) {
    console.log(ch);
}


var s = "HEllo" +" Hi "+ str1;
console.log(s);

var strOne = "JS is a programming language of web";
var strTwo = "frontend and backened development";
console.log(strOne.charAt(1));
console.log(strOne.match("/is/"));
console.log(strTwo.repeat(3));
console.log(strTwo.replace(/end/g,"END"));
console.log(strTwo.replace('end',"END"));
console.log(strTwo.search("end"));
console.log(strTwo.split(" "));
