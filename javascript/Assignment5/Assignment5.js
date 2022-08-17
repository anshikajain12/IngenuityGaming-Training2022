document.body.style.background="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(230,230,238,1) 47%, rgba(148,187,233,1) 100%)";
document.body.style.fontFamily="cursive";
document.body.style.fontSize="20px";
document.body.style.textAlign="center";
document.body.style.margin="0px 37px";
document.body.style.marginBottom="25px";



//Program1
document.write(`<h3>1. write a program to use call() and apply() method</h3>`)
var person={
    fullName:function(city,country){
        return this.firstName+" "+this.lastName;
    }
}
var person1={
    firstName:"Anshika",
    lastName:"Jain",
}
// document.write(`syntax of call function: person.fullName.call(person1)<br>`);
document.write(`Call function: ${person.fullName.call(person1)} <br>`);
// document.write(`syntax of Apply function: person.fullName.apply(person1)<br>`);
document.write(`Apply function: ${person.fullName.apply(person1)}`);


//Program2
document.write(`<h3>2. write a program to create an array having cube root of every element of another array</h3>`)
document.write(`<h5> var numbers=[8,27,64,125,216]</h5>`)
var numbers=[8,27,64,125,216];
var cubeRoot=[];
numbers.forEach((element)=>cubeRoot.push(Math.cbrt(element)));
document.write(`Cube Root of every element: [${cubeRoot}]`);


//Program3
document.write(`<h3>3. write a program to call a function in an interval of 3 sec for 5 times</h3>`)
function callbacks(){
    document.write("This is callback function <br>");
    
}
function clear(){
    clearInterval(timerId);
}
let timerId = setInterval(callbacks,3000);
setTimeout(clear, 15000);

// document.write(`<a href="/javascript/Assignment5/Assignmen5a.html"">click me</a>`)

// for(let i=0;i<5;i++){
//     setTimeout(callbacks,3000);
// }



//Program4
document.write(`<h3>4. write a program to iterate an array of objects using map function</h3>`)
document.write(`<h5> var people=[{name:"Ashish",age:23},{name:"Ajay",age:21},{name:"Arvind",age:26},{name:"Mahesh",age:28},{name:"Jay",age:19}]</h5>`)
var people=[
    {name:"Ashish",age:23},
    {name:"Ajay",age:21},
    {name:"Arvind",age:26},
    {name:"Mahesh",age:28},
    {name:"Jay",age:19}
];
people.map((element)=>{
    document.write(`Name: ${element.name} and Age: ${element.age}<br>`);
});



//Program5
document.write(`<h3>5. write a program to filter out people whose age is less than 25 in descending order</h3>`)
document.write(`<h5> var people=[{name:"Ashish",age:23},{name:"Ajay",age:21},{name:"Arvind",age:26},{name:"Mahesh",age:28},{name:"Jay",age:19}]</h5>`)
var peoples=[
    {name:"Ashish",age:23},
    {name:"Ajay",age:21},
    {name:"Arvind",age:26},
    {name:"Mahesh",age:28},
    {name:"Jay",age:19},
];
var result=peoples.filter((element)=>element.age<25).sort((n1,n2)=>{
    return n2.age-n1.age;
});
document.write("Age is less than 25 in descending order:<br>")
result.map((ele)=>{
    document.write(`${ele.age}<br>`)
})