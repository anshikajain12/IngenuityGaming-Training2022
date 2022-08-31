// import {msg, display,Employee} from "./library.js";
// import {msg} from "./library.js";
// import {display} from "./library.js";
// import {Employee} from "./library.js";

// console.log(msg);

// var data = display("Anshika");
// console.log(data);

// let emp= new Employee("Anshika",1511,"Trainee");
// emp.dispDetails();


import ImportMsg from "./library.js";
import * as datas from "./library.js";
console.log(datas.msg);
var data = datas.display("Anshika");
console.log(data);

let emp= new datas.Employee("Anshika",1511,"Trainee");
emp.dispDetails();
ImportMsg();

