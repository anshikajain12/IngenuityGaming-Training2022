var number = 0;
// if 
if(number>0){
    console.log("Number is positive");
}
console.log("Simple statement");




// if-else
if(number>0){
    console.log("Number is positive");
}
else{
    console.log("Number is negative");
}
console.log("Simple statement");


// ladder if-else
if(number>0){
    console.log("Number is positive");
}
else if(number==0){
    console.log("number is zero")
}
else{
    console.log("Number is negative");
}
console.log("Simple statement");


// nested if-else
if(number>=0){
    if(number==0){
        console.log("Number is Zero");
    }
    else{
        console.log("Number is positive");
    }
}
else{
    console.log("Number is negative");
}
console.log("Simple statement");







// Loops---
var i=1;        
while(i<=10){
    console.log("This is js loop "+i);
    i++;    
}

// do while
var j=1;
do
{
    console.log(" this is js do while loop "+j);
    j++;
}
while(j<1);

//for loop:
for (let k = 1; k <=10; k++) {
    console.log(" this is js for loop "+k);    
}
//break
// var l=1;
// for ( ;;) {
//     if(l > 10) break;
//     console.log("odd: "+l);
//     l+=2;
// }

//continue
var m=1;
for ( ;;) {
    if(m%2==0) continue;
    console.log("odd: "+m);
    m+=2;
    if(m>20) break;
}

// switch case:
var a = 2;
switch(a){
    case 1: console.log(" A is one"); 
        break;
    case 2: console.log(" A is two");
        break;
    case 3: console.log(" A is three");
        break;
    case 4: console.log(" A is four");
        break;
    case 5: console.log(" A is five");
        break;
    default : console.log("A is not match")
}
