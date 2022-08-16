// document.body.style.background="linear-gradient(90deg, rgba(84,100,124,1) 0%, rgba(90,121,136,1) 0%, rgba(112,187,143,1) 100%, rgba(128,210,147,0.9433656957928802) 100%)";
document.body.style.fontFamily="cursive";
document.body.style.fontSize="20px";
document.body.style.textAlign="center";
// document.body.style.textShadow="10px 10px 10px grey";
document.body.style.margin="0px 37px";
document.body.style.marginBottom="25px";

// 1. write a program to return sum of all arguments passed to a function
document.write(`<h3>1. write a program to return sum of all arguments passed to a function</h3>`);
function add(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
document.write(`sum of two number using add function is: ${add(2,3)} <br>`);
// document.write(`<br>`);
document.write(`sum of five number using add function is: ${add(1,2,3,4,5)}<br>`);
// document.write(`<br>`);
document.write(`sum of ten number using add function is: ${add(1,2,3,4,5,6,7,8,9,10)} <br>`);
// document.write(`<br>`);

//2. write a program to return more than 1 value from a function

document.write(`<h3>2. write a program to return more than 1 value from a function</h3>`);
function name(){
    var Name = prompt("Enter a name for function name()");
    var age = prompt("Enter an age for function name()");
    return "Name: "+ Name+" and Age: "+age;
}
var func = name();
document.write(func);
document.write(`<br>`);


//3. write a code to return entire function definition and display it

document.write(`<h3>3. write a code to return entire function definition and display it</h3>`);
function call(){
    return define;
}
function define(){
    var x = "This is a function definition";
    console.log(x); // This is a function definition
}
document.write(call());
document.write(`<br>`);



// 4. write a js program to create a new string adding "New!"  in front of a given string. 
// if the givemn string begins with "New!" already then return the original string


document.write(`<h3>4. write a js program to create a new string adding "New!"  in front of a given string. If the givemn string begins with "New!" already then return the original string</h3>`);
function str(a){
    var s= a.trim().split(/\s+/);
    if(s[0]=="New!"){
        document.write(`Original String: "${a}" <br>`);
    }
    else{
        a= "New! "+a;
        document.write(`Adding 'New!' word in a original String: "${a}" <br>`);
    }
}
str(prompt("Enter a string for creating of new string with the help of 'New!' word"));

//5. write a js program to create a new string from a given string taking first 3 characters 
// and the last 3 character of a string and add them together . The string length must be 3 or more .
//  if not return original string is returned


document.write(`<h3>5. write a js program to create a new string from a given string taking first 3 characters 
and the last 3 character of a string and add them together . The string length must be 3 or more .
If not return original string is returned
</h3>`);
function newString(strings){
    let lengthOfString = strings.length;
    if(lengthOfString<3){
        document.write(`Length of string is ${lengthOfString} so we return only original string: "${strings}" <br>`);
    }
    else{
        let first = strings.slice(0,3);
        // let last= strings.substr(lengthOfString-3);
        let last = strings.slice(-3);
        document.write(`Length of string is ${lengthOfString} so we return new String: "${first}${last}" <br>`);
    }
}
newString(prompt("Enter a string for creating of new string"));