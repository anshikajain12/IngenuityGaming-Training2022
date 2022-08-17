// object
var obj={
    firstName:"Sachin",
    lastName:"Yadav",
    //using function create method of object
    fullName:function(){
        return this.firstName + " "+ this.lastName;
    },
};

console.log(obj.fullName());





//function call()
var person1={
    firstName:"Sara",
    lastName:"Khan",
}
console.log(obj.fullName.call(person1));





var person={
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+" "+city+" "+country;
    }
}
var person1={
    firstName:"Sara",
    lastName:"Khan",
}
console.log(person.fullName.call(person1,"Mumbai","India"));



// Apply method to reuse a method available in other object
var person2={
    firstName:"Anshika",
    lastName:"Jain"
};
console.log(person.fullName.apply(person2,["Delhi","India"]));



// Arrow function
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
console.log(myarr);


var newarr= myarr.forEach((i)=>i*10); // undefined
var newarr= myarr.map((i)=>i*10);
console.log(newarr);

var users=[
    {firstName:"Anshika",lastName :"Jain"},
    {firstName:"Ayushi", lastName : "Jain"},

]
var fullname= users.map((u)=>{
    return u.firstname+" "+u.lastname;
});
console.log(fullname);



var ages=[32,33,16,40];
var result= ages.filter((age)=>{
    return age>18;
});
console.log(result);


let cities=[
    {name:"AA",population:3333333},
    {name:"AB",population:3033333},
    {name:"AC",population:2333333},
    {name:"AD",population:9333333},
    {name:"AE",population:1333333},
    {name:"AF",population:6333333},
]
var bigicity=[];
for (var index = 0; index < cities.length; index++) {
    if(cities[index].population>3000000){
        bigicity.push(cities[index]);
    }
}
console.log(bigicity);

var bigcities=cities.filter((city)=>city.population>3000000).sort().reverse();
var bigcities=cities.filter((city)=>city.population>3000000).sort(function(n1,n2){
    return n2.name-n1.name;
});
console.log(bigcities);


//callback
setTimeout(callbacks,10000);
function callbacks(){
    console.log("Hello friends");
}


setTimeout(() => {
    console.log("heyy!! Good Morning");
}, 5000);



//timing 
var myinterval =setInterval(callbacks,2000);
clearInterval(myinterval);