"use strict";
class Person {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
        console.log("constructor called");
        this.empCode = empCode;
        this.empName = empName;
    }
}
class Employee extends Person {
    constructor(code, names, salary) {
        super(code, names);
        this.empSal = salary;
    }
    dispSalary() {
        console.log(`Salary: ${this.empSal}`);
    }
    dispDetails() {
        console.log(`code: ${this.empCode} Name: ${this.empName}`);
    }
}
let emp2 = new Employee(105, "Anshika", 200000);
emp2.dispSalary();
emp2.dispDetails();
