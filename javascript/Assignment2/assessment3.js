document.body.style.background="linear-gradient(90deg, rgba(84,100,124,1) 0%, rgba(94,195,213,1) 43%, rgba(42,65,42,1) 100%, rgba(128,210,147,0.9433656957928802) 100%)";
document.body.style.fontFamily="cursive";
document.body.style.fontSize="25px";
document.body.style.textAlign="center";

document.getElementById("Heading").innerText="Introduction";
var person_Obj={
    name:"Anshika Jain",
    age:20,
    address:{city:"Jalesar",state:"Uttar Pradesh",pincode:207302},
    hobbies:["dancing","playing badminton","playing games"],
    display:function(){
        return (`Name: ${this.name} <br> Age: ${this.age} <br> Address: ${this.address.city}, ${this.address.state}, ${this.address.pincode} <br> Hobbies is: ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}`);
    }
}
document.write(person_Obj.display());