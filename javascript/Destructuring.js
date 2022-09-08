//destructuring with array

var arr=[1,2,3,4,5,6,7,8,9,10];
let [a,b,,,,,,,,t]= arr;
console.log(a);
console.log(b);
console.log(t);


//Destructuring with objects

let person={
    name:"Anshika",
    age:20,
    mobile:807744,
    email:"anshikajain@ingenuitygaming.com",
    city:"Noida"
}
// console.log(person.name);
let {name,age,mobile,email,city}=person;
console.log(mobile);
console.log(email);
console.log(city);
//Actual object does not change



