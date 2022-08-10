document.body.style.background="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(182,182,221,1) 46%, rgba(148,187,233,1) 100%)";
document.body.style.background="rgb(238,174,202)";
document.body.style.fontFamily="cursive";
document.body.style.fontSize="25px";
document.body.style.textAlign="center";
document.body.style.marginTop="150px";
document.getElementById("Heading").style.textShadow="2px 4px 5px black";

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


