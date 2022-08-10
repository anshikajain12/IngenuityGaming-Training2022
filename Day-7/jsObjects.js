var person={
    name:"Anshika",
    age:20,
    city:{cityName: "Jalesar" , pincode: 207302},
    sector:[1,2,3,4,5],
    details: function(){return this.name +" "+this.age+" "+ this.city.cityName}
};
console.log(person);
console.log(person.name);
console.log("sector "+person.sector[1]);
console.log(person.details());

// by constructor
var student = new Object();
student.name="Anshika";
student.age=20;
student["city"]="Mathura";
console.log(student);