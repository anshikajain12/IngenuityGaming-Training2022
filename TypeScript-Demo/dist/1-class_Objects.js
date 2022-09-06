"use strict";
class Person {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
        this.dispDetails = () => console.log(`code: ${this.empCode} Name: ${this.empName}`);
        console.log("constructor called");
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp1 = new Person(101, "Rahul");
class Employee extends Person {
    constructor(code, names, salary) {
        super(code, names);
        this.empSal = salary;
    }
    dispSalary() {
        console.log(`Salary: ${this.empSal}`);
    }
}
let emp2 = new Employee(105, "Anshika", 200000);
emp2.dispSalary();
emp2.dispDetails();
