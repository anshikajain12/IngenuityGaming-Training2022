let msg=  "This is module concepts";

let account=12345678910;
let display =(name)=>{
    return `${name} Welcome to Ingenuity Gaming !`;
};

class Employee{
    constructor(name,id,designation){
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    dispDetails(){
        console.log(`Employee Name : ${this.name}\nEmployee id: ${this.id}\nEmployee designation ${this.designation}\n`);
    };
}

export {msg,display,Employee}