//object
// var obj={
//     firstName:"Sachin",
//     lastName:"Yadav",
//     //using function create method of object
//     fullName:function(){
//         return this.firstName + " "+ this.lastName;
//     },
// };

// console.log(obj.fullName());





// //function call()
// var person1={
//     firstName:"Sara",
//     lastName:"Khan",
// }
// console.log(obj.fullName.call(person1));





// var person={
//     fullName:function(city,country){
//         return this.firstName+" "+this.lastName+" "+city+" "+country;
//     }
// }
// var person1={
//     firstName:"Sara",
//     lastName:"Khan",
// }
// console.log(person.fullName.call(person1,"Mumbai","India"));



//Apply method to reuse a method available in other object
// var person2={
//     firstName:"Anshika",
//     lastName:"Jain"
// };
// console.log(person.fullName.apply(person2,["Delhi","India"]));



//Arrow function
var add=(a,b)=>{
    console.log(a+b);
    console.log("Hello");
}
var adding=(a,b)=> console.log(a+b);
var adding2=(a,b)=> a+b;

add(2,3);
adding(2,3);
console.log(adding2(2,6));

var square=(a)=>console.log("Result: "+a*a);
square(5);

var myarr=[1,3,5,7];
myarr.forEach((element)=>console.log(element*10)
);