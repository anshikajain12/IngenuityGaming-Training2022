document.body.style.background="linear-gradient(to right, deeppink, blue)";

document.body.style.color="rgb(23 9 60)";
document.body.style.fontFamily="sans-serif";
document.body.style.fontSize="20px";
document.body.style.justifyContent="center";
document.body.style.textAlign="center";

//Assignment2
var name = prompt("Enter your name");
document.getElementById("names").innerHTML=`<p>Input name from User:  ${name} </p>`
document.getElementById("names").style.background="linear-gradient(90deg, rgba(84,100,124,1) 0%, rgba(29,52,56,1) 0%, rgba(130,190,144,0.9433656957928802) 34%, rgba(111,207,194,1) 100%)";
document.getElementById("names").style.color="rgb(23 9 60)";
document.getElementById("names").style.fontFamily="sans-serif";
document.getElementById("names").style.fontSize="35px";
document.getElementById("names").style.justifyContent="center";
document.getElementById("names").style.textAlign="center";
document.getElementById("names").style.textShadow="13px 7px 8px gray";


//Assignment1
const d= new Date();
let date = d.getDate();
let month = d.getMonth()+1;
let year= d.getFullYear();
document.getElementById("dates").innerHTML=`<p> Today Date: ${date}/${month}/${year} </p>`;

var weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','saturday'];
let day = (weekday[d.getDay()]);
document.write(`<p> Today Day: ${day} </p>`);
document.getElementById("dates").style.color="rgb(23 9 60)";
document.getElementById("dates").style.fontFamily="sans-serif";
document.getElementById("dates").style.fontSize="20px";
document.getElementById("dates").style.justifyContent="center";
document.getElementById("dates").style.textAlign="center";




//Assignment3
//Take two number from User and Print 
var number1 = prompt("Enter number1");
var number2=prompt("Enter number2");

// Addition
 var addi= Number(number1)+Number(number2);
 document.write(`<h3>Addition of ${number1} and ${number2} is : ${addi} </h3>`);

//subtraction
 var sub= number1-number2;
 document.write(`<h3>Subtraction of ${number1} and ${number2} is : ${sub} </h3>`);


 //multiplication 
 var multi= number1 * number2;
 document.write(`<h3>Multiplication of ${number1} and ${number2} is : ${multi} </h3>`);


 //divide
 var divide = number1 / number2;
 document.write(`<h3>Division of ${number1} and ${number2} is : ${divide} </h3>`);


 //Assignment4
